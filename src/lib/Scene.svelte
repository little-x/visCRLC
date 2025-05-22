<script>
  // @ts-nocheck
  import * as THREE from 'three';
  import GUI from 'lil-gui';
  import * as d3 from 'd3';

  import {onMount} from 'svelte';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
  import {testGUI} from './testGUI.js'; 
  import {addLabels, locationLabels, addRateLabel} from './label.js'; // Updated import
  import Ui from './Ui.svelte';
  import Legend from './Legend.svelte';
  
  // Scene setup variables
  let scene, camera, renderer, controls, labelRenderer;
  let model, el, scene3d; // Reference to the .scene3d element
  const modelPath = import.meta.env.BASE_URL + '3d/GL.glb';
  const sandTexturePath = import.meta.env.BASE_URL + 'img/sand.jpg';
  let sandTexture; // Will hold the loaded texture
  const years = [1870, 1920, 1950, 2000, 2015]; // historic years
  let shorelines = {}; // store shoreline layers by year
  let shorelineSrf = {}; // Store references to shoreline surfaces
  let chgRate = {}; // Store parsed CSV data by group and interval
  let changeRatePolygons = {}; // Store references
  let bathymetryObjects = [];
  let transectObjects = []; 
  let parcelObjects = []; // Add array to store parcel objects

  // Red for erosion (negative values), blue for accretion (positive values)
  const colorScale = d3.scaleSequential(d3.interpolateRdYlBu).domain([-50, 50]);

  // Gradient color scale for shoreline years
  const shorelineColorScale = d3.scaleSequential(d3.interpolateRgb("white", "black"))
    .domain([Math.min(...years), Math.max(...years)]);

  let isLoading = true; // Track loading state

  // Initialize the scene, camera, renderer and controls
  const initScene = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 8000); // Aspect ratio will be updated later

    renderer = new THREE.WebGLRenderer({antialias: true, canvas: el, alpha: true});
    renderer.setClearColor( 0x000000, 0 );
    
    // Handle container resizing
    window.addEventListener('resize', resize);
    
    // Add orbit controls for better navigation
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = .05;
    controls.maxPolarAngle = Math.PI / 3; // Limit vertical rotation
    controls.minDistance = 300; // Minimum zoom distance
    controls.maxDistance = 5000; // Maximum zoom distance
    controls.zoomToCursor = true; // Zooming centered at the cursor location


    // Create and configure the CSS2DRenderer
    labelRenderer = new CSS2DRenderer();
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';
    labelRenderer.domElement.style.pointerEvents = 'none'; // Prevent labels from blocking mouse events
    scene3d.appendChild(labelRenderer.domElement);

    // Load the sand texture
    const textureLoader = new THREE.TextureLoader();
    sandTexture = textureLoader.load(sandTexturePath);
    sandTexture.wrapS = THREE.RepeatWrapping;
    sandTexture.wrapT = THREE.RepeatWrapping;
    sandTexture.repeat.set(5, 5); // Adjust the texture repeat as needed

    // Set up lighting
    lighting();

    // Set initial size and aspect ratio
    resize();
  };
  
  // Load the 3D model
  const loadModel = () => {
    return new Promise((resolve, reject) => {
      const loader = new GLTFLoader();
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.5/")
      loader.setDRACOLoader(dracoLoader)
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
        if (!chgRate[intervalNumber]) {
          chgRate[intervalNumber] = {};
        }
        
        // Store by interval number for easy lookup
        chgRate[intervalNumber][groupId] = {
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
    bathymetryObjects = []; // Reset bathymetry objects
    transectObjects = []; // Reset transect objects
    parcelObjects = []; // Reset parcel objects

    // Initialize with empty arrays for each year
    years.forEach((year) => {
      shorelines[year] = [];
    });
    
    // Find the oldest year
    const oldestYear = Math.min(...years);

    // Traverse the shoreline parent to find shoreline layers
    model.traverse((object) => {
      if (object.isLine) {
        // Look for year identifiers in the object name
        years.forEach((year) => {
          if (object.name.startsWith(year.toString())) {
            shorelines[year].push(object);

            // Apply color based on the year
            if (object.material) {
              object.material = new THREE.MeshBasicMaterial({
                color: new THREE.Color(shorelineColorScale(year)),
                transparent: true,
                opacity: 1,
                depthTest: false
              });
            }

            // Initially make all shoreline objects visible
            object.visible = true;        
            object.renderOrder = 100;
          }
        });
      }
      
      // Handle shoreline surfaces - only show the oldest year's surface
      if (object.name.includes("_srf")) {
        shorelineSrf[object.name] = object;
        
        // Extract year from the object name
        const yearMatch = object.name.match(/^(\d+)/);
        if (yearMatch) {
          const year = parseInt(yearMatch[1]);
          // Only show the oldest year's surface
          object.visible = year === oldestYear;
        } else {
          object.visible = false; // Default to hidden if year can't be determined
        }

        if (object.material) {
          // MeshBasicMaterial doesn't need light to be visible
          object.material = new THREE.MeshBasicMaterial({
            map: sandTexture
            // transparent: true,
            // opacity: 0.9,
            // side: THREE.DoubleSide
          });
        }
      }
      
      if (object.name.includes("_bathy")) {
        bathymetryObjects.push(object);
      }
      if (object.name.includes("_transect")) {
        transectObjects.push(object);
        object.visible = false;
      }
      if (object.name.includes("ditch")) {
        if (object.material) {
          object.material = new THREE.LineBasicMaterial({
              color: new THREE.Color(0x364e85),
              linewidth: 2, 
              depthTest: false,
            });
          object.renderOrder = 101;
        }
      }
      if (object.name.includes("road")) {
        if (object.material) {
          object.material = new THREE.LineBasicMaterial({
              color: new THREE.Color(0xdddddd),
              linewidth: 4, // Increased line width
              depthTest: false
            });
          object.renderOrder = 100; 
        }
      }
      if (object.name.includes("parcel")) {
        if (object.material) {
          object.material = new THREE.LineBasicMaterial({
              color: new THREE.Color(0xeeeeee),
              linewidth: .1, 
              depthTest: false,
            });
          object.renderOrder = 101;
        }
        parcelObjects.push(object); // Store parcel objects
        object.visible = false; // Initially hide parcels
      }
    });
  };

  const findChangeRatePolygons = (model) => {
    changeRatePolygons = {};
    
    model.traverse(object => {
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
          if (!changeRatePolygons[intervalNumber]) {
            changeRatePolygons[intervalNumber] = {};
          }
          
          // Store the object reference
          changeRatePolygons[intervalNumber][groupId] = {
            object: object,
            startYear: startYear,
            endYear: endYear
          };
          
          // Show only the first interval by default
          object.visible = parseInt(intervalNumber) === 2;  // Show only the first interval by default
          }
      }
    });
    
    console.log('Found change rate polygons:', changeRatePolygons);
  };

  // Function to apply colors to polygons based on change rates
  const applyChangeRateColors = () => {
    // For each interval
    Object.keys(changeRatePolygons).forEach(intervalNumber => {
      // For each group in this interval
      Object.keys(changeRatePolygons[intervalNumber]).forEach(groupId => {
        const polygonInfo = changeRatePolygons[intervalNumber][groupId];

        // Get the corresponding change rate data
        if (chgRate[intervalNumber] && chgRate[intervalNumber][groupId]) {
          const rate = chgRate[intervalNumber][groupId].rate;

          // Get the color for this rate
          const color = colorScale(rate);

          // Create material with this color
          const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(color),
            transparent: true,
            opacity: .9,
            side: THREE.DoubleSide,
            depthTest: false
          });

          // Apply to the polygon
          if (polygonInfo.object.isMesh) {
            polygonInfo.object.material = material;

            // Store the change rate in the object's userData for tooltips/info
            polygonInfo.object.userData.changeRate = rate;
            
            // Create text label for the change rate value using the imported function
            const rateText = addRateLabel(scene, polygonInfo.object, rate, colorScale);
            
            // Store the text object reference in the polygon info
            changeRatePolygons[intervalNumber][groupId].rateText = rateText;
          }
        }
      });
    });
  };
  
  // Set up scene lighting
  function lighting() {
    // Add a directional light
    const mainLight = new THREE.DirectionalLight(0xffffff, 5); // White light, intensity 5
    mainLight.position.set(5, 5, 15); // Position the light
    scene.add(mainLight);

    const secLight = new THREE.DirectionalLight(0xf2f1eb, 1); // White light, intensity 1
    secLight.position.set(15, 15, -10); // Position the light
    scene.add(secLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, .5);
    scene.add(hemiLight);
  }
  
  // Center the camera on the model
  const cameraCenter = () => {
    const boundingBox = new THREE.Box3().setFromObject(model);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    controls.target.copy(center);   // Set the controls target to the center of the model
    camera.position.set(center.x - 2000, center.y + 3000, center.z + 3000); // Adjust camera position based on model size
    camera.lookAt(center);
    camera.near = .1;
    camera.far = 9000;
    console.log('Model center:', center);
  };

  // Handle window resize
  const resize = () => {
    if (!scene3d) return;

    const scene3dWidth = scene3d.clientWidth;
    const scene3dHeight = scene3d.clientHeight;

    renderer.setSize(scene3dWidth, scene3dHeight);
    labelRenderer.setSize(scene3dWidth, scene3dHeight);

    camera.aspect = scene3dWidth / scene3dHeight;
    camera.updateProjectionMatrix();

  };
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    if (controls) controls.update(); // Update controls if they exist
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera); // Render labels
  };
  
  // Add all labels more efficiently using the array
  const addAllLabels = () => {
    locationLabels.forEach(location => {
      addLabels(
        model,
        location.name,
        location.description || `Information about ${location.name.replace(/_/g, ' ')}`,
        location.imageUrl || '',
        location.type || 1 // Default to type 1 if not specified
      );
    });
  };

  // Function to set up document click handler for closing annotations
  const setupDocumentClickHandler = () => {
    document.addEventListener('click', (event) => {
      const annotationBox = document.querySelector('.annotation-box');
      // Only proceed if there's an open annotation
      if (annotationBox) {
        // Check if the click was outside both the annotation and any label
        const clickedOnAnnotation = annotationBox.contains(event.target);
        const clickedOnLabel = event.target.closest('.label');
        
        // If clicked outside both annotation and labels, close the annotation
        if (!clickedOnAnnotation && !clickedOnLabel) {
          annotationBox.remove();
        }
      }
    });
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
      // testGUI(camera, shorelines, years, changeRatePolygons, model); // Set up GUI controls
      addAllLabels(); // Add labels to the model
      setupDocumentClickHandler(); // Set up handler to close annotations when clicking elsewhere
      isLoading = false; // Set loading to false after everything is ready
      animate(); // Start animation loop
    } catch (error) {
      console.error('Failed to initialize:', error);
      isLoading = false; // Ensure loading is false even if there's an error
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

<div class="scene-container">
  <div class="scene3d" bind:this={scene3d}>
    {#if isLoading}
      <div class="loading-message">3D scene loading...</div>
    {/if}
    <canvas class="scene-canvas" bind:this={el}></canvas>
  </div>
  <div class="control">
    <Ui {years} {shorelines} {shorelineSrf} {changeRatePolygons} 
      {chgRate} {bathymetryObjects} {transectObjects} {parcelObjects} {shorelineColorScale}/>
  </div>
  <div class="key">
    <Legend />
  </div>
</div>

<style>
  .scene3d {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%; 
    height: 80vh; 
    margin: 0 auto; /* Center the container horizontally */
  }

  .scene-canvas {
    width: 100%;
    height: 100%;
  }

  /* .control {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
  } */

  .loading-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 18px;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 20;
  }

  :global(.label) {
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 14px;
    pointer-events: auto;
    cursor: pointer;
  }
  
  :global(.label-type-1) {
    /* Standard label - using the default styles */
  }
  
  :global(.sub-label) {
    /* Common styles for sub-labels (type 2 and 3) */
    font-size: 0;  /* Hide text initially */
    border-radius: 50%;
    padding: 0;
  }
  
  :global(.label-type-2) {
    width: 12px;
    height: 12px;
    background-color: rgba(82, 186, 227, 0.8);
    border: 2px solid rgba(255, 255, 255);
  }

  :global(.label-type-3) {
    width: 10px;
    height: 10px;
    background-color: rgba(181, 209, 214, 0.8);
    border: 2px solid rgba(255, 255, 255);
  }

  :global(.sub-label:hover), :global(.sub-label.hover-active) {
    /* Show text when hovering or when any sub-label is active */
    font-size: 12px;
    width: auto;
    height: auto;
    border-radius: 3px;
    padding: 2px 5px;
    border: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.9);
  }

  :global(.annotation-box) {
    position: absolute;
    right: 10px;
    background: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 15px;
    border-radius: 5px;
    max-width: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  
  :global(.annotation-box h3) {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 16px;
  }
  
  :global(.annotation-box p) {
    margin: 0;
    font-size: 14px;
  }
  
  :global(.close-button) {
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    padding: 0 5px;
  }
  
  :global(.annotation-image-container) {
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: center;
  }
  
  :global(.annotation-image) {
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
    border-radius: 3px;
  }
  
  :global(.annotation-image-placeholder) {
    background-color: rgba(100, 100, 100, 0.3);
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    border-radius: 3px;
    font-style: italic;
    color: #ccc;
  }

  :global(.rate-text) {
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 1px 3px; 
    border-radius: 10px;
    border: 1px solid rgba(123, 123, 123, 0.5);
    font-size: 14px;
    pointer-events: none;
    font-weight: bold;
  }
</style>