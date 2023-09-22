import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Objects
 */

// At some point, you might want to group things. Let's say you are building a house with walls, doors, windows, a roof, bushes, etc.
// When you think you're done, you become aware that the house is too small, and you have to re-scale each object and update their positions.
// A good alternative would be to group all those objects into a container and scale that container.
// You can do that with the Group class.
// Instantiate a Group and add it to the scene. Now, when you want to create a new object, you can add it to the Group you just created using the add(...) method rather than adding it directly to the scene
// Because the Group class inherits from the Object3D class, it has access to the previously-mentioned properties and methods like position, scale, rotation, quaternion, and lookAt.

const group = new THREE.Group();
group.scale.y = 2;
group.rotation.y = 0.5;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = -1.5;
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = 0;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 1.5;
group.add(cube3);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// // The position possesses 3 essential properties, which are x, y, and z. Those are the 3 necessary axes to position something in a 3D space.
// // As for the meaning of 1 unit, it's up to you. 1 can be 1 centimeter, 1 meter, or even 1 kilometer. I recommend that you adapt the unit to what you want to build. If you're going to create a house, you probably should think of 1 unit as 1 meter.
// // mesh.position.x = 0.7;
// // mesh.position.y = -0.6;
// // mesh.position.z = 1;

// // The position property is not any object. It's an instance of the Vector3 class. While this class has an x, a y, and a z property, it also has many useful methods.
// // To change the values, instead of changing x, y and z separately, you can also use the set(...) method:
// mesh.position.set(0.7, -0.6, 1);

// // Scale is also a Vector3. By default, x, y and z are equal to 1, meaning that the object has no scaling applied. If you put 0.5 as a value, the object will be half of its size on this axis, and if you put 2 as a value, it will be twice its original size on this axis.
// // mesh.scale.x = 2;
// // mesh.scale.y = 0.5;
// // mesh.scale.z = 0.5;

// // To change the values, instead of changing x, y and z separately, you can also use the set(...) method:
// mesh.scale.set(2, 0.5, 0.5);

// // Rotation is a little more troublesome than position and scale. There are two ways of handling a rotation.
// // You can use the self-evident rotation property, but you can also use the less obvious quaternion property. Three.js supports both, and updating one will automatically update the other. It's just a matter of which one you prefer.

// // The rotation property also has x, y, and z properties, but instead of a Vector3, it's a Euler. When you change the x, y, and z properties of a Euler, you can imagine putting a stick through your object's center in the axis's direction and then rotating that object on that stick.
// //      If you spin on the y axis, you can picture it like a carousel.
// //      If you spin on the x axis, you can imagine that you are rotating the wheels of a car you'd be in.
// //      And if you rotate on the z axis, you can imagine that you are rotating the propellers in front of an aircraft you'd be in.

// // The rotation applies in the following order: x, y, and then z. That can result in weird behaviors like one named gimbal lock when one axis has no more effect, all because of the previous ones.
// // We can change this order by using the reorder(...) method object.rotation.reorder('yxz')

// mesh.rotation.reorder("YXZ");
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

// // The quaternion property also expresses a rotation, but in a more mathematical way, which solves the order problem.

// // NOTE: You can combine the position, the rotation (or quaternion), and the scale in any order. The result will be the same. It's equivalent to the state of the object.

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Object3D instances have an excellent method named lookAt(...) that lets you ask an object to look at something. The object will automatically rotate its -z axis toward the target you provided. No complicated maths needed.
// camera.lookAt(mesh.position);

/**
 * Axes Helper
 */

// The green line corresponds to the y axis. The red line corresponds to the x axis and there is a blue line corresponding to the z axis but we can't see it because it's perfectly aligned with the camera.
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
