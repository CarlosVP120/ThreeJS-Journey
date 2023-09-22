// We need 4 elements to get started:

// A scene that will contain objects
// Some objects
// A camera
// A renderer

// --------- Scene ------------
const scene = new THREE.Scene();

// --------- Object ------------

// Objects can be many things. You can have primitive geometries, imported models, particles, lights, and so on.
// To create that red cube, we need to create a type of object named Mesh. A Mesh is the combination of a geometry (the shape) and a material (how it looks).

// To create the geometry, we use the BoxGeometry class with the first 3 parameters that correspond to the box's size.
const geometry = new THREE.BoxGeometry(1, 1, 1);

// To create the material, we use the MeshBasicMaterial class with one parameter: an object {} containing all the options. All we need is to specify its color property.
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// To create the final mesh, we use the Mesh class and send the geometry and the material as parameters.
const mesh = new THREE.Mesh(geometry, material);

// You can now add your mesh to the scene by using the add(...) method:
scene.add(mesh);

// ------------ Camera ------------

// The camera is not visible. It's more like a theoretical point of view. When we will do a render of your scene, it will be from that camera's point of view.

// To create the camera, we use the PerspectiveCamera class.
// There are two essential parameters we need to provide:
//      The field of view (fov): The field of view is how large your vision angle is. (Normally 45 - 55)
//      The aspect ratio: The width of the canvas divided by its height

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// ------------ Renderer ------------
// The renderer's job is to do the render.
// Create the <canvas> element in the HTML file before you load the scripts and give it a class.

// To create the renderer, we use the WebGLRenderer class with one parameter: an object {} containing all the options. We need to specify the canvas property corresponding to the <canvas> we added to the page.
// Create a canvas variable at the start of the code, then fetch and store in it the element we created in the HTML using document.querySelector(...).

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
// We also need to update the size of your renderer with the setSize(...) method using the sizes object we created earlier. The setSize(...) method will automatically resize our <canvas> accordingly:
renderer.setSize(sizes.width, sizes.height);

// ----------------- FIRST RENDER ----------------------

// It's time to work on our first render. Call the render(...) method on the renderer and send it the scene and the camera as parameters:
renderer.render(scene, camera);

// Here's the issue: we haven't specified our object's position, nor our camera's. Both are in the default position, which is the center of the scene and we can't see an object from its inside (by default).
// To fix that, we have access to multiple properties on each object, such as position, rotation, and scale. For now, use the position property to move the camera backward.

// The position property is an object with three relevant properties: x, y and z. By default, Three.js considers the forward/backward axis to be z.
// To move the camera backward, we need to provide a positive value to that property. You can do that anywhere once you've created the camera variable, yet it has to happen before you do the render.

// ---------- END OF THE LESSON --------------
