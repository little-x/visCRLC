import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls;

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
