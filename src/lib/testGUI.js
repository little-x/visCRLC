import GUI from 'lil-gui';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import * as THREE from 'three';

export const testGUI = (camera, shorelines, years, changeRatePolygons, model) => {
    let gui = new GUI();
  
    // Camera Controls
    const cameraFolder = gui.addFolder('Camera');
    cameraFolder.add(camera.position, 'x', -500, 10000).name('Position X');
    cameraFolder.add(camera.position, 'y', -5000, 5000).name('Position Y');
    cameraFolder.add(camera.position, 'z', 0, 2000).name('Position Z');
    cameraFolder.add(camera, 'fov', 1, 180).name('Field of View')
      .onChange(() => {camera.updateProjectionMatrix();});
    cameraFolder.open();
  
    // Model Size Controls
    const modelFolder = gui.addFolder('Model Size');
    if (model) {
      const params = { scale: model.scale.x }; // Use a single parameter for uniform scaling
      modelFolder.add(params, 'scale', 0.1, 1.5).name('Uniform Scale')
        .onChange((value) => {
          model.scale.set(value, value, value); // Update x, y, and z together
        });
    }
    modelFolder.open();

    // Shoreline Layer Controls
    const layerFolder = gui.addFolder('Shoreline Years');
    // processLayers(model);
    
    // Create visibility parameters object
    const layerVisibility = {};
    
    // Set initial values based on current visibility
    years.forEach((year) => {
      // Check if the first element in the array exists and is visible
      const isVisible = shorelines[year].length > 0 && 
                      shorelines[year][0].visible;
      layerVisibility[year] = isVisible;
    });
    
    // Add controls for each year
    years.forEach((year) => {
      // @ts-ignore
      layerFolder.add(layerVisibility, year.toString())
        .name(`Year ${year}`)
        .onChange((visible) => {
          // Update visibility of all meshes for this year
          if (shorelines[year]) {
            shorelines[year].forEach((item) => {
              item.visible = visible;
            });
          }
        })
        .listen(); // Listen for changes to update the GUI state
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
        intervalVisibility[interval] = true; // Default to visible
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
        // @ts-ignore
        changeRateFolder.add(intervalVisibility, interval)
          .name(`${startYear}-${endYear} (Interval ${interval})`)
          .onChange(visible => {
            // Update visibility for all polygons in this interval
            Object.keys(changeRatePolygons).forEach(groupId => {
              if (changeRatePolygons[groupId][interval]) {
                changeRatePolygons[groupId][interval].object.visible = visible;
              }
            });
          })
          .listen();
      });
      changeRateFolder.open();

  };

  export const addLabels = (model,name) => {
    if (!model) return;
  // Create a combined bounding box for all matching objects
  const combinedBox = new THREE.Box3();
  let foundMatchingObject = false;
  
  // Find all objects with matching name and expand the bounding box
  model.traverse((object) => {
    if (object.isMesh && object.name.includes(name)) {
      foundMatchingObject = true;
      const objectBox = new THREE.Box3().setFromObject(object);
      combinedBox.union(objectBox); // Use union to combine bounding boxes
    }
  });
  
  // If we found matching objects, create one label at the center
  if (foundMatchingObject) {
    // Get the center of the combined bounding box
    const center = new THREE.Vector3();
    combinedBox.getCenter(center);
    
    const lbDiv = document.createElement('div');
    lbDiv.classList.add('label');
    lbDiv.textContent = name;
    
    // Create the label at the center position and add it to the scene
    const label = new CSS2DObject(lbDiv);
    label.position.set(center.x*10, center.y*10, center.z*10);
    
    // Add to the scene or a parent object that contains all the meshes
    model.add(label);
  }    
};

