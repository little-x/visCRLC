import * as d3 from 'd3';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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

