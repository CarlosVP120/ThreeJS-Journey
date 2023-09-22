import "./style.css";
// import * as THREE from 'three' will import all default classes of Three.js inside the THREE variable. The three module is in the /node_modules/ folder, but you don't need to touch it.
import * as THREE from "three";

// Same code as in the last lesson

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// If the server was already running, open the page (no need to refresh).
// If not, run npm run dev from the terminal, and the page should open.
