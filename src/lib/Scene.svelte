<script>
  // @ts-nocheck
  import * as THREE from 'three';
  import GUI from 'lil-gui';
  import * as d3 from 'd3';

  import {onMount} from 'svelte';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
  import {testGUI, addLabels} from './testGUI.js'; // Import the setupGUI function from Control.svelte
  
  import Ui from './Ui.svelte';
  
  // Scene setup variables
  let scene, camera, renderer, controls, labelRenderer;
  let model, el;
  const modelPath = import.meta.env.BASE_URL + '3d/GL.glb';
  let shorelines = {}; // Object to store shoreline layers by year
  const years = [1870, 1920, 1950, 2000, 2015]; // historic years

  const sceneWidth = window.innerWidth*0.8;
  const sceneHeight = window.innerHeight*0.8;

  let chgRate = {}; // Store parsed CSV data by group and interval
  let changeRatePolygons = {}; // Store references to polygons

  // Red for erosion (negative values), blue for accretion (positive values)
  const colorScale = d3.scaleSequential(d3.interpolateRdYlBu).domain([-50, 10]);

  // Initialize the scene, camera, renderer and controls
  const initScene = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 8000);

    renderer = new THREE.WebGLRenderer({antialias: true, canvas: el, alpha: true});
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize(sceneWidth, sceneHeight);
    // Handle window resizing
    window.addEventListener('resize', resize);
    
    // Add orbit controls for better navigation
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Create and configure the CSS2DRenderer
    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(sceneWidth, sceneHeight);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';
    labelRenderer.domElement.style.pointerEvents = 'none'; // Prevent labels from blocking mouse events
    document.body.appendChild(labelRenderer.domElement);

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
  
  // Function to load and parse CSV data
  const loadchgRate = async () => {
    try {
      // Use a dynamic path for the CSV file
      const csvPath = import.meta.env.BASE_URL + 'GROUP_GL.csv';
      const response = await fetch(csvPath);

      if (!response.ok) {
        throw new Error(`Failed to fetch CSV file: ${response.status} ${response.statusText}`);
      }

      const csvText = await response.text();
      
      // Parse the CSV data
      const rows = d3.csvParse(csvText);
      
      // Process the data and organize by group and interval
      rows.forEach(row => {
        const groupId = row.groupID; 
        const intervalNumber = row.interval; 
        const startYear = row.intervalStart; 
        const endYear = row.intervalEnd; 
        const changeRate = row.chgRate;
        // const changeRate = parseFloat(row['ChgRate (m/yr)']);

        // Create nested structure if it doesn't exist
        if (!chgRate[groupId]) {
          chgRate[groupId] = {};
        }
        
        // Store by interval number for easy lookup
        chgRate[groupId][intervalNumber] = {
          startYear: startYear,
          endYear: endYear,
          rate: changeRate
        };
      });
      
      console.log('Parsed change rate data:', chgRate);
      return chgRate;
    } catch (error) {
      console.error('Error loading change rate data:', error);
      alert('Failed to load change rate data. Please check if the file exists and try again.');
      return null;
    }
  };

  // Process model to identify shoreline layers by year
  const processLayers = (model) => {
    // Reset the layers object
    shorelines = {};

    // Initialize with empty arrays for each year
    years.forEach((year) => {
      shorelines[year] = [];
    });

    // Traverse the shoreline parent to find shoreline layers
    model.traverse((object) => {
      if (object.isMesh || object.isGroup || object.isLine) {
        // Look for year identifiers in the object name
        years.forEach((year) => {
          if (object.name.startsWith(year.toString())) {
            shorelines[year].push(object);

            // Initially hide all layers except the first year
            // object.visible = year === years[0]; // Show only the first year by default
            object.visible = true; // Set all layers to be visible for now
            // console.log(`"${object.name}"`);
          }
        });
      }

      // Find all shoreline curve and set them to be highest render order
      if (object.name.includes("_shoreline")) {
        object.renderOrder = 100;
        if (object.material) {
          object.material.depthTest = false;
        }
      }
    })

    // console.log('Processed shoreline layers:', shorelines);
  };

  const findChangeRatePolygons = (model) => {
    changeRatePolygons = {};
    
    model.traverse(object => {
      // Check if this is a mesh and has a name that matches our pattern
      if (object.isMesh || object.isGroup) {
        // Parse the name to extract group ID, interval, start year, and end year
        // Format: {groupId}_int{intervalNumber}_s{startYear}_e{endYear}
        const nameParts = object.name.split('_');
        if (nameParts.length >= 4) {
          const groupId = nameParts[0];
          
          // Extract interval number from "int{number}"
          const intervalMatch = nameParts[1].match(/int(\d+)/);
          if (!intervalMatch) return;
          const intervalNumber = intervalMatch[1];
          
          // Extract start year from "s{year}"
          const startYearMatch = nameParts[2].match(/s(\d+)/);
          if (!startYearMatch) return;
          const startYear = startYearMatch[1];
          
          // Extract end year from "e{year}"
          const endYearMatch = nameParts[3].match(/e(\d+)/);
          if (!endYearMatch) return;
          const endYear = endYearMatch[1];
          
          // If we don't have this group in our dictionary yet, create it
          if (!changeRatePolygons[groupId]) {
            changeRatePolygons[groupId] = {};
          }
          
          // Store the object reference
          changeRatePolygons[groupId][intervalNumber] = {
            object: object,
            startYear: startYear,
            endYear: endYear
          };
          
          // Initially hide all change rate polygons
          object.visible = true;
        }
      }
    });
    
    console.log('Found change rate polygons:', changeRatePolygons);
  };

  // Function to apply colors to polygons based on change rates
  const applyChangeRateColors = () => {
    // For each group
    Object.keys(changeRatePolygons).forEach(groupId => {
      // For each interval in this group
      Object.keys(changeRatePolygons[groupId]).forEach(intervalNumber => {
        const polygonInfo = changeRatePolygons[groupId][intervalNumber];
        
        // Get the corresponding change rate data
        if (chgRate[groupId] && chgRate[groupId][intervalNumber]) {
          const rate = chgRate[groupId][intervalNumber].rate;
          
          // Get the color for this rate
          const color = colorScale(rate);
          
          // Create material with this color
          const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(color),
            transparent: true, 
            opacity: 0.7,
            side: THREE.DoubleSide
          });
          
          // Apply to the polygon
          if (polygonInfo.object.isMesh) {
            polygonInfo.object.material = material;
            
            // Store the change rate in the object's userData for tooltips/info
            polygonInfo.object.userData.changeRate = rate;
          }
        }
      });
    });
  };


  // Set up scene lighting
  function lighting() {
    // Add a directional light
    const mainLight = new THREE.DirectionalLight(0xffffff, 5); // White light, intensity 1
    mainLight.position.set(5, 5, 15); // Position the light
    scene.add(mainLight);

    const secLight = new THREE.DirectionalLight(0x99ccff, 1); // White light, intensity 1
    secLight.position.set(15, 15, -10); // Position the light
    scene.add(secLight);

    // Add ambient light for softer lighting
    const ambientLight = new THREE.AmbientLight(0xFDF5E2, .5); // Soft white light
    scene.add(ambientLight);
  }
  
  // Center the camera on the model
  const cameraCenter = () => {
    const boundingBox = new THREE.Box3().setFromObject(model);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    controls.target.copy(center);   // Set the controls target to the center of the model
    camera.position.set(center.x - 500, center.y + 4000, center.z + 2000); // Adjust camera position based on model size
    camera.lookAt(center);
    camera.near = 100;
    camera.far = 1000000;
    console.log('Model center:', center);
  };

  // Handle window resize
  const resize = () => {
    renderer.setSize(sceneWidth, sceneHeight);
    camera.aspect = sceneWidth / sceneHeight;
    camera.updateProjectionMatrix();
  };
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    if (controls) controls.update(); // Update controls if they exist
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera); // Render labels
  };
  
  
  // Main initialization function
  const init = async () => {
    // Initialize the 3D scene
    initScene();
    
    try {
      const loadedModel = await loadModel();
      
      await loadchgRate();
      processLayers(loadedModel); // Process layers after loading the model
      findChangeRatePolygons(loadedModel); // Find and categorize polygons
      applyChangeRateColors(); // Apply colors based on change rates
      addLabels(model,'Tokeland');
      addLabels(model,'Westport');
      testGUI(camera, shorelines, years, 
        changeRatePolygons, model); // Set up GUI controls
      animate(); // Start animation loop
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

  <!-- <h2>3D Shoreline</h2> -->
  <canvas bind:this={el}></canvas>
  <Ui {years} {shorelines} {changeRatePolygons} {chgRate} />

  <style>
    :global(.label) {
      color: white;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 2px 5px;
      border-radius: 3px;
      font-size: 14px;
      pointer-events: none; /* Prevent labels from blocking mouse events */
    }
  </style>