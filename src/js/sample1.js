import * as THREE from 'three';

// renderer
const canvas = document.querySelector('.canvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('orange');

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 4);
scene.add(camera);

// light
const ambientLight = new THREE.AmbientLight('#fff', 0.5);
scene.add(ambientLight);

// loop
function draw() {
  renderer.render(scene, camera);
  window.requestAnimationFrame(draw);
}
draw();
