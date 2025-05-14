import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import * as THREE from 'three';

// Define all labels in a structured array for better organization
export const locationLabels = [
  {
    name: 'Tokeland',
    description: 'Tokeland is a coastal community located on the northern end of Willapa Bay.',
    imageUrl: '', // Optional image URL
    type: 1  // Smaller, faded label
  },
  {
    name: 'Westport', 
    description: 'Westport is a coastal city located on the southern side of the entrance to Grays Harbor.',
    imageUrl: '',
    type: 1   
  },
  {
    name: 'North_Cove',
    description: 'North Cove, also known as "Washaway Beach", has experienced some of the most severe coastal erosion on the Pacific Coast.',
    imageUrl: import.meta.env.BASE_URL + 'img/nc.jpg',
    type: 1  
  },
  {
    name: 'Grays_Harbor',
    description: 'Grays Harbor is an estuarine bay located on Washington\'s Pacific coast.',
    imageUrl: '',
    type: 1   
  },
  {
    name: 'Willapa_Bay',
    description: 'Willapa Bay is a large, shallow bay on Washington\'s Pacific coast known for its oyster beds.',
    imageUrl: '',
    type: 1  
  },
  {
    name: 'Lighthouse',
    description: 'Lost in 1940.',
    imageUrl: import.meta.env.BASE_URL + 'img/lighthouse.jpg',
    type: 2  
  },
  {
    name: 'Old_Pioneer_Cemetery',
    description: '',
    imageUrl: '',
    type: 2  
  },
  {
    name: 'Hotel_Norwood',
    description: '',
    imageUrl: '',
    type: 2  
  }
];

export const addLabels = (model, name, description = '', imageUrl = '', type = 1) => {
    if (!model) return;
  // Create a combined bounding box for all matching objects
  const combinedBox = new THREE.Box3();
  let foundMatchingObject = false;
  
  // Find all objects with matching name and expand the bounding box
  model.traverse((object) => {
    if ((object.isLine || object.isMesh) && object.name.includes(name)) {      foundMatchingObject = true;
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
    // Add a class based on the label type
    lbDiv.classList.add(`label-type-${type}`);
    lbDiv.textContent = name.replace(/_/g, ' '); // Replace underscores with spaces
    lbDiv.setAttribute('data-name', name);
    lbDiv.setAttribute('data-description', description || `Information about ${name}`);
    lbDiv.setAttribute('data-image', imageUrl || ''); // Store image URL as data attribute
    lbDiv.setAttribute('data-type', String(type)); // Convert type to string before setting as data attribute
    
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
  const imageUrl = labelElement.getAttribute('data-image');
  
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
  
  // Add image if provided
  if (imageUrl && imageUrl.trim() !== '') {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('annotation-image-container');
    
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = `Image of ${name}`;
    image.classList.add('annotation-image');
    image.addEventListener('error', () => {
      // Replace with placeholder if image fails to load
      image.src = 'https://placehold.co/200x150?text=No+Image';
      image.alt = 'Image not available';
    });
    
    imageContainer.appendChild(image);
    annotationBox.appendChild(imageContainer);
  } else {
    // Add placeholder image when no image is provided
    const imagePlaceholder = document.createElement('div');
    imagePlaceholder.classList.add('annotation-image-placeholder');
    imagePlaceholder.textContent = 'No image available';
    annotationBox.appendChild(imagePlaceholder);
  }
  
  annotationBox.appendChild(descElement);
  
  // Position annotation box near the label
  const labelRect = labelElement.getBoundingClientRect();
  annotationBox.style.left = `${labelRect.right + 10}px`;
  annotationBox.style.top = `${labelRect.top}px`;
  
  // Add annotation box to the document
  document.body.appendChild(annotationBox);
  
  // Prevent event from bubbling up to document
  event.stopPropagation();
}

