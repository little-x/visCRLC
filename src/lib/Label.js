import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import * as THREE from 'three';

export const addLabels = (model, name, description = '') => {
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
    lbDiv.textContent = name.replace(/_/g, ' '); // Replace underscores with spaces
    lbDiv.setAttribute('data-name', name);
    lbDiv.setAttribute('data-description', description || `Information about ${name}`);
    
    // Add click event listener
    lbDiv.addEventListener('click', showAnnotation);
    
    // Create the label at the center position and add it to the scene
    const label = new CSS2DObject(lbDiv);
    label.position.set(center.x * 10, center.y * 10, center.z * 10);
    
    // Add to the scene or a parent object that contains all the meshes
    model.add(label);
  }    
};

// Function to show annotation when a label is clicked
function showAnnotation(event) {
  // Remove any existing annotation boxes
  const existingAnnotation = document.querySelector('.annotation-box');
  if (existingAnnotation) {
    existingAnnotation.remove();
  }
  
  const labelElement = event.target;
  const name = labelElement.getAttribute('data-name');
  const description = labelElement.getAttribute('data-description');
  
  // Create annotation box
  const annotationBox = document.createElement('div');
  annotationBox.classList.add('annotation-box');
  
  // Add content to annotation box
  const titleElement = document.createElement('h3');
  titleElement.textContent = name.replace(/_/g, ' ');
  
  const descElement = document.createElement('p');
  descElement.textContent = description;
  
  const closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    annotationBox.remove();
  });
  
  annotationBox.appendChild(closeButton);
  annotationBox.appendChild(titleElement);
  annotationBox.appendChild(descElement);
  
  // Position annotation box near the label
  const labelRect = labelElement.getBoundingClientRect();
  annotationBox.style.left = `${labelRect.right + 10}px`;
  annotationBox.style.top = `${labelRect.top}px`;
  
  // Add annotation box to the document
  document.body.appendChild(annotationBox);
  
  // Prevent event from propagating to other elements
  event.stopPropagation();
}

