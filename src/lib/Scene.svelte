<script>
  // @ts-nocheck
  import * as THREE from 'three';
  import {onMount} from 'svelte';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import GUI from 'lil-gui';
  
  // Scene setup variables
  let scene, camera, renderer, controls;
  let model, el;
  const modelPath = '/3d/GL_0403.glb';
  let shorelineLayers = {}; // Object to store shoreline layers by year
  const years = [1870, 1955, 1970, 1999, 2015]; // historic years
  
  // Initialize the scene, camera, renderer and controls
  const initScene = () => {
    // Handle window resizing
    window.addEventListener('resize', resize);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 8000);
    camera.position.set(1300, 170, 300);
    
    renderer = new THREE.WebGLRenderer({antialias: true, canvas: el});
    renderer.setClearColor(0x87ceeb);
    
    // Add orbit controls for better navigation
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // Set up lighting
    lighting();
  };
  
  // Load the 3D model
  const loadModel = () => {
    return new Promise((resolve, reject) => {
      const loader = new GLTFLoader();
      loader.load(
        modelPath, 
        (gltf) => {
          model = gltf.scene;
          model.scale.set(.1, .1, .1); // Scale the model to fit the scene
          model.position.set(0, 0, 0); // Center the model in the scene
          scene.add(model);
          processLayers(model); // Process layers after loading the model
          cameraCenter();
          resolve(model);
        }, 
        undefined, 
        (error) => {
          console.error('An error occurred while loading the model:', error);
          reject(error);
        }
      );
    });
  };
  
// Process model to identify shoreline layers by year
const processLayers = (model) => {
  // Reset the layers object
  shorelineLayers = {};

  // Initialize with empty arrays for each year
  years.forEach((year) => {
    shorelineLayers[year] = [];
  });

  // Traverse the shoreline parent to find child layers
  model.traverse((child) => {
    if (child.isMesh || child.isGroup) {
      // Look for year identifiers in the object name
      years.forEach((year) => {
        if (child.name.includes(year.toString())) {
          shorelineLayers[year].push(child);

          // Initially hide all layers except the first year
          child.visible = year === years[2];
        }
      });
    }
  });

  console.log('Processed shoreline layers:', shorelineLayers);
};

  // Set up scene lighting
  function lighting() {
    // Add a directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White light, intensity 1
    directionalLight.position.set(5, 5, 5); // Position the light
    scene.add(directionalLight);
  
    // Add ambient light for softer lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Soft white light
    scene.add(ambientLight);
  }
  
  // Center the camera on the model
  const cameraCenter = () => {
    const boundingBox = new THREE.Box3().setFromObject(model);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    controls.target.copy(center);   // Set the controls target to the center of the model
    // camera.position.set(center.x, center.y + 100, center.z + 200); // Adjust camera position based on model size
    camera.lookAt(center);
    // console.log('Model center:', center);
  };
  
  // Handle window resize
  const resize = () => {
    renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    if (controls) controls.update(); // Update controls if they exist
    renderer.render(scene, camera);
  };
  
  // Set up GUI controls
  const setupGUI = (model) => {
    const gui = new GUI();
  
    // Camera Controls
    const cameraFolder = gui.addFolder('Camera');
    cameraFolder.add(camera.position, 'x', -50, 10000).name('Position X');
    cameraFolder.add(camera.position, 'y', -50, 500).name('Position Y');
    cameraFolder.add(camera.position, 'z', 0, 500).name('Position Z');
    cameraFolder.add(camera, 'fov', 1, 180).name('Field of View')
      .onChange(() => {camera.updateProjectionMatrix();});
    cameraFolder.open();
  
    // Model Size Controls
    const modelFolder = gui.addFolder('Model Size');
    if (model) {
      const params = { scale: model.scale.x }; // Use a single parameter for uniform scaling
      modelFolder.add(params, 'scale', 0.1, 3).name('Uniform Scale')
        .onChange((value) => {
          model.scale.set(value, value, value); // Update x, y, and z together
        });
    }
    modelFolder.open();

    // Shoreline Layer Controls
    const layerFolder = gui.addFolder('Shoreline Layers');
    years.forEach((year) => {
      const layer = shorelineLayers[year] || new THREE.Group(); // Create a new group if it doesn't exist
      shorelineLayers[year] = layer; // Store the layer in the object
      scene.add(layer); // Add the layer to the scene
  
      const params = { visible: true };
      layerFolder.add(params, 'visible').name(`Show ${year} Layer`)
        .onChange((value) => {
          layer.visible = value; // Show or hide the layer based on the checkbox
        });
    });
    layerFolder.open();
  };
  
  // Main initialization function
  const init = async () => {
    // Initialize the 3D scene
    initScene();
    
    try {
      // Load the model
      const loadedModel = await loadModel();
      
      // Set up GUI with the loaded model
      setupGUI(loadedModel);
      
      // Start animation loop
      animate();
    } catch (error) {
      console.error('Failed to initialize:', error);
    }
  };
  
  // Run initialization when component mounts
  onMount(() => {
    init();
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', resize);
      if (controls) controls.dispose();
      if (renderer) renderer.dispose();
    };
  });
  </script>
  
  <h2>3D Shoreline</h2>
  <canvas bind:this={el}></canvas>