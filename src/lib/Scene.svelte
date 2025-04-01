<script>
// @ts-nocheck
import * as THREE from 'three';
import {onMount} from 'svelte';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
// console.log(camera);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry,material);

// const tLoader = new THREE.TextureLoader();
// tLoader.load('', (texture) => {
//     const terrain = new THREE.PlaneGeometry(width,height,widthSegments,heightSegments);
//     const material = new THREE.MeshBasicMaterial
// })

let renderer;
let el;

scene.add(cube);
const testSphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
  );
  testSphere.scale.set(0.7,0.7,0.7);
    scene.add(testSphere);


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

  loader.load('/3d/GL_0331.glb', (gltf) => {
    // console.log('Model loaded:', gltf.scene);
    const model = gltf.scene;
    model.scale.set(.1,.1,.1); // Scale the model to fit the scene
    model.position.set(0,0,0); // Center the model in the scene

    scene.add(model);

    // Center the camera on the model
    // const box = new THREE.Box3().setFromObject(model);
    // const center = box.getCenter(new THREE.Vector3());
    // const size = box.getSize(new THREE.Vector3());

    // const maxDim = Math.max(size.x, size.y, size.z);
    // const fov = camera.fov * (Math.PI / 180);
    // const cameraZ = Math.abs(maxDim / Math.sin(fov / 2));

    // camera.position.set(center.x, center.y, cameraZ);
    // camera.lookAt(center);

    // const animate = () => {
    //   requestAnimationFrame(animate);
    //   renderer.render(scene, camera);
    // };
    // animate();
    renderer.render(scene, camera);

  }, undefined, (error) => {
    console.error('An error occurred while loading the model:', error);
  });

  loader.load('/3d/Avocado.glb', (gltf) => {
    const av = gltf.scene;
    av.scale.set(10,10,10); // Scale the model to fit the scene
    av.position.set(1, 0, 4); // Center the model in the scene

    scene.add(av);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

  }, undefined, (error) => {
    console.error('An error occurred while loading the model:', error);
  });

}

onMount(() => {
    createScene(el);
});

</script>


<h2>3D Shoreline</h2>
<canvas bind:this={el}></canvas>
