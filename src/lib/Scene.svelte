<script>
// @ts-nocheck
import * as THREE from 'three';
import {onMount} from 'svelte';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';

let scene, camera, renderer, controls;
let model, el;
const modelPath ='/3d/GL_0401.glb';
let shorelineLayers = {}; // Object to store shoreline layers by year
const years = [1870, 1955, 1970, 1999, 2015]; // historic years

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 8000);
  camera.position.set(1300, 170, 300);

const createScene = (el) => {
  // scene = new THREE.Scene();
  // camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);
  //   camera.position.set(1300, 170, 300);

  renderer = new THREE.WebGLRenderer({antialias:true, canvas:el});
  renderer.setClearColor(0x87ceeb);
  // Add orbit controls for better navigation
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  resize(); // add event listener?
  lighting()
  loadModel();
  animate();
}

const loadModel = () => {
  const loader = new GLTFLoader();
  loader.load(modelPath, (gltf) => {
    model = gltf.scene;
    model.scale.set(.1,.1,.1); // Scale the model to fit the scene
    model.position.set(0,0,0); // Center the model in the scene
    scene.add(model);
    cameraCenter();
    setupGUI(model); // Pass the model to the GUI setup function
  }, undefined, (error) => {
    console.error('An error occurred while loading the model:', error);
  });
}

function lighting(){
  // Add a directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White light, intensity 1
  directionalLight.position.set(5, 5, 5); // Position the light
  scene.add(directionalLight);

  // Add ambient light for softer lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Soft white light
  scene.add(ambientLight);
};

const cameraCenter = () => {
  const boundingBox = new THREE.Box3().setFromObject(model);
  const center = new THREE.Vector3();
  boundingBox.getCenter(center);
  controls.target.copy(center);   // Set the controls target to the center of the model
  // camera.position.set(center.x, center.y + 100, center.z + 200); // Adjust camera position based on model size
  camera.lookAt(center);
  // console.log('Model center:', center);
};
  
const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

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
    modelFolder.add(params, 'scale', 0.1, 3).name('Uniform Scale')
      .onChange((value) => {model.scale.set(value, value, value); // Update x, y, and z together
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
