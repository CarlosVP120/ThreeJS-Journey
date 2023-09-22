import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

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
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// The primary purpose of requestAnimationFrame is not to run code on each frame.
// requestAnimationFrame will execute the function you provide on the next frame. But then, if this function also uses requestAnimationFrame to execute that same function on the next frame, you'll end up with your function being executed on each frame forever which is exactly what we want.
// Create a function named tick and call this function once. In this function, use window.requestAnimationFrame(...) to call this same function on the next frame:
// You can now move the renderer.render(...) call inside that function and increase the cube rotation:

/**
 * Animate
 */

// // Time ------- Solution 1 --------
// let time = Date.now();

// // Clock ------- Solution 2 --------
// const clock = new THREE.Clock();

// Sometimes you'll want to animate your scene in a very specific way that will require using another library. There are tons of animation libraries, but a very famous one is GSAP.
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

const tick = () => {
  // // Time ------- Solution 1 --------
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;

  // // Update objects
  // mesh.rotation.y += 0.001 * deltaTime;
  // //  ------- END Solution 1 --------

  // // Clock ------- Solution 2 --------
  // const elapsedTime = clock.getElapsedTime();

  // Update objects
  // mesh.rotation.y = elapsedTime;
  // mesh.position.x = Math.cos(elapsedTime);
  // mesh.position.y = Math.sin(elapsedTime);
  // //  ------- END Solution 2 --------

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
