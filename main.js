import "./style.css";

import * as THREE from "three";

import { table } from "./objects/table.js";
import { umbrella } from "./objects/umbrella";
import { completedBench } from "./objects/bench";
import { laptop } from "./objects/laptop";

// Making scene, camera, renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(16);
camera.position.setX(3);
camera.position.setY(12);

renderer.render(scene, camera);

// Adding Lights
const pointLight = new THREE.PointLight(0xffffff, 1, 30);
pointLight.position.set(2, 15, 2);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040, 5);
scene.add(ambientLight);

// Adding Objects
const skyTexture = new THREE.TextureLoader().load("../imgs/sky.jpg");
scene.background = skyTexture;

const sandTexture = new THREE.TextureLoader().load("../imgs/sand.jpeg");
const normalTexture = new THREE.TextureLoader().load("../imgs/normal.jpg");

const sand = new THREE.Mesh(
  new THREE.CircleGeometry(100, 32),
  new THREE.MeshStandardMaterial({ map: sandTexture, normalMap: normalTexture })
);
sand.rotateX(-1.57);

scene.add(sand);

// Umbrella object
scene.add(...umbrella);

// Table object
scene.add(...table);

// Bench object
scene.add(...completedBench);

// Laptop object
scene.add(...laptop);

function moveCamera() {
  camera.position.y = 12 + window.scrollY / 100.0;
  camera.position.x = 3 + window.scrollY / 100.0;
  camera.position.z = 16 + window.scrollY / 50.0;
}
document.body.onscroll = moveCamera;

// Animation never ending loop
(function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
})();

// Copy text to clipboard

const emailDiv = document.getElementById("email");

const copyTextToClipBoard = function () {
  const copyText = document.getElementById("my-email");

  const data = [
    new ClipboardItem({
      "text/plain": new Blob([`${copyText.textContent}`], {
        type: "text/plain",
      }),
    }),
  ];

  (async function writeToClipboard() {
    try {
      await navigator.clipboard.write(data);
      copyText.textContent = "Copied!";
      copyText.classList.add("copied");
      setTimeout(() => {
        copyText.classList.remove("copied");
        copyText.textContent = "tom.motiejunas@gmail.com";
      }, 2000);
    } catch (e) {
      console.error("Unable to write to clipboard. :-(", e);
    }
  })();
};

emailDiv.addEventListener("click", copyTextToClipBoard);

// Project Showcase

const projectPhotos = document.querySelectorAll(".project-img");
const projectBlock = document.querySelectorAll(".project-block");
const skillsBlock = document.getElementById("skills");
const closeBtn = document.querySelectorAll(".close");

projectPhotos.forEach((el, i) => {
  console.log(i);
  el.addEventListener("click", () => {
    projectBlock[i].classList.remove("hidden");
    skillsBlock.classList.add("hidden");
  });
});

closeBtn.forEach((el, i) =>
  el.addEventListener("click", () => {
    projectBlock[i].classList.add("hidden");
    skillsBlock.classList.remove("hidden");
  })
);
