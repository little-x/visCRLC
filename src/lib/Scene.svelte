<script>
// @ts-nocheck
import * as THREE from 'three';
import {onMount} from 'svelte';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import GUI from 'lil-gui';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);
camera.position.x = 1500;
camera.position.y = 170;
camera.position.z = 200;
// console.log(camera);

let renderer;
let el;
let shorelineLayers = {}; // Object to store shoreline layers by year

// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry(),
//   new THREE.MeshBasicMaterial({color: 0x00ff00})
// );
// scene.add(cube);

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({antialias:true, canvas:el});
  renderer.setClearColor(0x87ceeb);

  resize();

  // Add a directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White light, intensity 1
  directionalLight.position.set(5, 5, 5); // Position the light
  scene.add(directionalLight);

  // Add ambient light for softer lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Soft white light
  scene.add(ambientLight);

  const loader = new GLTFLoader();
  const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
  };

  // let model;
  loader.load('/3d/GL_0401.glb', (gltf) => {
    const model = gltf.scene;
    model.scale.set(.1,.1,.1); // Scale the model to fit the scene
    model.position.set(0,0,0); // Center the model in the scene
    scene.add(model);

    // Calculate the center of the model using bounding box
    const boundingBox = new THREE.Box3().setFromObject(model);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    
    // Make the camera look at the center of the model
    camera.lookAt(center);
    
    // Optional: Log the center coordinates
    console.log('Model center:', center);

    setupGUI(model);  // Pass the model to setupGUI
  }, undefined, (error) => {
    console.error('An error occurred while loading the model:', error);
  });

  animate();

}

const setupGUI = (model) => {
  const gui = new GUI();

  // Camera Controls
  const cameraFolder = gui.addFolder('Camera');
  cameraFolder.add(camera.position, 'x', -50, 10000).name('Position X');
  cameraFolder.add(camera.position, 'y', -50, 500).name('Position Y');
  cameraFolder.add(camera.position, 'z', 0, 500).name('Position Z');
  cameraFolder.add(camera, 'fov', 1, 180).name('Field of View')
    .onChange(() => {camera.updateProjectionMatrix();})
  cameraFolder.open();

  // Model Size Controls
  const modelFolder = gui.addFolder('Model Size');
  if (model) {
    const params = { scale: model.scale.x }; // Use a single parameter for uniform scaling
    modelFolder.add(params, 'scale', 0.1, 3).name('Uniform Scale').onChange((value) => {
      model.scale.set(value, value, value); // Update x, y, and z together
    });
  }
  modelFolder.open();
};

setupGUI();

onMount(() => {
    createScene(el);
});

</script>

<h2>3D Shoreline</h2>
<canvas bind:this={el}></canvas>
