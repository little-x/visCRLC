<script>
// @ts-nocheck
import * as THREE from 'three';
import {onMount} from 'svelte';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
console.log(camera);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry,material);

const loader = new THREE.TextureLoader();
loader.load('', (texture) => {
    const terrain = new THREE.PlaneGeometry(width,height,widthSegments,heightSegments);
    const material = new THREE.MeshBasicMaterial
})



let renderer;

scene.add(cube);

const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.z += 0.01;
  renderer.render(scene, camera);
};

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({antialias:true, canvas:el});
  resize();
  animate();
  renderer.render(scene, camera);

}

let el;

onMount(() => {
    createScene(el)
});

</script>


<h2>3D Shoreline</h2>
<canvas bind:this={el}></canvas>
