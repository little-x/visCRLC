<script>
  // @ts-nocheck
  import * as THREE from 'three';
  import {onMount} from 'svelte';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  import GUI from 'lil-gui';
  import * as d3 from 'd3';
  
  // Scene setup variables
  let scene, camera, renderer, controls;
  let model, el;
  const modelPath = import.meta.env.BASE_URL + '3d/GL.glb';
  let shorelineLayers = {}; // Object to store shoreline layers by year
  const years = [1870, 1920, 1955, 1999, 2015]; // historic years

  const sceneWidth = window.innerWidth*0.8;
  const sceneHeight = window.innerHeight*0.8;

  let changeRateData = {}; // Will store parsed CSV data by group and interval
  let changeRatePolygons = {}; // Will store references to polygons

  // Red for erosion (negative values), blue for accretion (positive values)
  const colorScale = d3.scaleSequential(d3.interpolateRdYlBu).domain([-10, 10]);

  // Initialize the scene, camera, renderer and controls
  const initScene = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 8000);
    camera.position.set(-500, 3000, 1000);
    camera.near = 50;
    camera.far = 10000;

    renderer = new THREE.WebGLRenderer({antialias: true, canvas: el, alpha: true});
    renderer.setClearColor( 0x000000, 0 );

    renderer.setSize(sceneWidth, sceneHeight);
    // Handle window resizing
    window.addEventListener('resize', resize);
    
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

    // Traverse the shoreline parent to find shoreline layers
    model.traverse((object) => {
      if (object.isMesh || object.isGroup) {
        // Look for year identifiers in the object name
        years.forEach((year) => {
          if (object.name.startsWith(year.toString())) {
            shorelineLayers[year].push(object);

            // Initially hide all layers except the first year
            object.visible = year === years[0];
            // console.log(`"${object.name}"`);
          }
        });
      }

      // Find all shoreline curve and set them to be highest render order
      // if (object.name.includes("_shoreline")) {
      //   object.renderOrder = 100;
      //   if (object.material) {
      //     object.material.depthTest = false;
      //   }
      // }

    })

    // console.log('Processed shoreline layers:', shorelineLayers);
  };

  // Function to load and parse CSV data
  const loadChangeRateData = async () => {
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
        if (!changeRateData[groupId]) {
          changeRateData[groupId] = {};
        }
        
        // Store by interval number for easy lookup
        changeRateData[groupId][intervalNumber] = {
          startYear: startYear,
          endYear: endYear,
          rate: changeRate
        };
      });
      
      console.log('Parsed change rate data:', changeRateData);
      return changeRateData;
    } catch (error) {
      console.error('Error loading change rate data:', error);
      alert('Failed to load change rate data. Please check if the file exists and try again.');
      return null;
    }
  };

  // Function to find and categorize change rate polygons in the model
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
          object.visible = false;
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
        if (changeRateData[groupId] && changeRateData[groupId][intervalNumber]) {
          const rate = changeRateData[groupId][intervalNumber].rate;
          
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
    // camera.position.set(center.x, center.y + 100, center.z + 200); // Adjust camera position based on model size
    camera.lookAt(center);
    // console.log('Model center:', center);
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
  };
  
  // Set up GUI controls
  const setupGUI = (model) => {
    const gui = new GUI();
  
    // Camera Controls
    const cameraFolder = gui.addFolder('Camera');
    // cameraFolder.add(camera.position, 'x', -50, 10000).name('Position X');
    // cameraFolder.add(camera.position, 'y', -50, 500).name('Position Y');
    // cameraFolder.add(camera.position, 'z', 0, 500).name('Position Z');
    cameraFolder.add(camera, 'fov', 1, 180).name('Field of View')
      .onChange(() => {camera.updateProjectionMatrix();});
    cameraFolder.open();
  
    // Model Size Controls
    // const modelFolder = gui.addFolder('Model Size');
    // if (model) {
    //   const params = { scale: model.scale.x }; // Use a single parameter for uniform scaling
    //   modelFolder.add(params, 'scale', 0.1, 3).name('Uniform Scale')
    //     .onChange((value) => {
    //       model.scale.set(value, value, value); // Update x, y, and z together
    //     });
    // }
    // modelFolder.open();

    // Shoreline Layer Controls
    const layerFolder = gui.addFolder('Shoreline Years');
    processLayers(model);
    
    // Create visibility parameters object
    const layerVisibility = {};
    
    // Set initial values based on current visibility
    years.forEach((year) => {
      // Check if the first element in the array exists and is visible
      const isVisible = shorelineLayers[year].length > 0 && 
                      shorelineLayers[year][0].visible;
      layerVisibility[year] = isVisible;
    });
    
    // Add controls for each year
    years.forEach((year) => {
      layerFolder.add(layerVisibility, year.toString())
        .name(`Year ${year}`)
        .onChange((visible) => {
          // Update visibility of all meshes for this year
          if (shorelineLayers[year]) {
            shorelineLayers[year].forEach((item) => {
              item.visible = visible;
            });
          }
        });
      });
      
      layerFolder.open();

      const changeRateFolder = gui.addFolder('Shoreline Change Rates');

      // Get all unique interval numbers
      const intervals = new Set();
      Object.keys(changeRatePolygons).forEach(groupId => {
        Object.keys(changeRatePolygons[groupId]).forEach(intervalNumber => {
          intervals.add(intervalNumber);
        });
      });
      
      // Create an object to track the visibility state of each interval
      const intervalVisibility = {};
      intervals.forEach(interval => {
        intervalVisibility[interval] = false;
      });
      
      // Add a control for each interval
      Array.from(intervals).sort().forEach(interval => {
        // Find an example of this interval to get years for the label
        let startYear = '', endYear = '';
        for (const groupId in changeRatePolygons) {
          if (changeRatePolygons[groupId][interval]) {
            startYear = changeRatePolygons[groupId][interval].startYear;
            endYear = changeRatePolygons[groupId][interval].endYear;
            break;
          }
        }
        
        // Add toggle to GUI
        changeRateFolder.add(intervalVisibility, interval)
          .name(`${startYear}-${endYear} (Interval ${interval})`)
          .onChange(visible => {
            // Update visibility for all polygons in this interval
            Object.keys(changeRatePolygons).forEach(groupId => {
              if (changeRatePolygons[groupId][interval]) {
                changeRatePolygons[groupId][interval].object.visible = visible;
              }
            });
          });
      });
      changeRateFolder.open();
  };
  
  // Main initialization function
  const init = async () => {
    // Initialize the 3D scene
    initScene();
    
    try {
      const loadedModel = await loadModel();
      
      await loadChangeRateData();
      // processLayers(loadedModel); // Process layers after loading the model
      findChangeRatePolygons(loadedModel); // Find and categorize polygons
      applyChangeRateColors(); // Apply colors based on change rates

      setupGUI(loadedModel);
      
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
  
  <h2>3D Shoreline</h2>
  <canvas bind:this={el}></canvas>