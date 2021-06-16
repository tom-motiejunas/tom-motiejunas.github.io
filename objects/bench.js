import * as THREE from "three";

let completedBench;

const material = new THREE.MeshStandardMaterial({ color: 0x834015 });

const bench = new THREE.Mesh(new THREE.BoxGeometry(5, 1, 25), material);
bench.position.y = 4;
bench.position.x = 11;

const benchLeg1 = new THREE.Mesh(new THREE.BoxGeometry(5, 1, 1), material);
benchLeg1.position.y = 2;
benchLeg1.position.x = 11;
benchLeg1.position.z = 12;
benchLeg1.rotateZ(1);
const benchLeg2 = new THREE.Mesh(new THREE.BoxGeometry(5, 1, 1), material);
benchLeg2.position.y = 2;
benchLeg2.position.x = 11;
benchLeg2.position.z = 12;
benchLeg2.rotateZ(-1);
const benchLeg3 = new THREE.Mesh(new THREE.BoxGeometry(5, 1, 1), material);
benchLeg3.position.y = 2;
benchLeg3.position.x = 11;
benchLeg3.position.z = -12;
benchLeg3.rotateZ(1);
const benchLeg4 = new THREE.Mesh(new THREE.BoxGeometry(5, 1, 1), material);
benchLeg4.position.y = 2;
benchLeg4.position.x = 11;
benchLeg4.position.z = -12;
benchLeg4.rotateZ(-1);

const benchSupportBackrest1 = new THREE.Mesh(
  new THREE.BoxGeometry(5, 1, 1),
  material
);
benchSupportBackrest1.position.y = 6;
benchSupportBackrest1.position.x = 14;
benchSupportBackrest1.position.z = -12;
benchSupportBackrest1.rotateZ(1);
const benchSupportBackrest2 = new THREE.Mesh(
  new THREE.BoxGeometry(5, 1, 1),
  material
);
benchSupportBackrest2.position.y = 6;
benchSupportBackrest2.position.x = 14;
benchSupportBackrest2.position.z = 12;
benchSupportBackrest2.rotateZ(1);
const benchBackrest = new THREE.Mesh(new THREE.BoxGeometry(2, 1, 25), material);
benchBackrest.position.y = 7;
benchBackrest.position.x = 14;
benchBackrest.position.z = 0;
benchBackrest.rotateZ(1);

const otherBench = new THREE.Mesh(new THREE.BoxGeometry(5, 1, 25), material);
otherBench.position.y = 4;
otherBench.position.x = -11;

const otherBenchLeg1 = new THREE.Mesh(new THREE.BoxGeometry(5, 1, 1), material);
otherBenchLeg1.position.y = 2;
otherBenchLeg1.position.x = -11;
otherBenchLeg1.position.z = 12;
otherBenchLeg1.rotateZ(1);
const otherBenchLeg2 = new THREE.Mesh(new THREE.BoxGeometry(5, 1, 1), material);
otherBenchLeg2.position.y = 2;
otherBenchLeg2.position.x = -11;
otherBenchLeg2.position.z = 12;
otherBenchLeg2.rotateZ(-1);
const otherBenchLeg3 = new THREE.Mesh(new THREE.BoxGeometry(5, 1, 1), material);
otherBenchLeg3.position.y = 2;
otherBenchLeg3.position.x = -11;
otherBenchLeg3.position.z = -12;
otherBenchLeg3.rotateZ(1);
const otherBenchLeg4 = new THREE.Mesh(new THREE.BoxGeometry(5, 1, 1), material);
otherBenchLeg4.position.y = 2;
otherBenchLeg4.position.x = -11;
otherBenchLeg4.position.z = -12;
otherBenchLeg4.rotateZ(-1);

const benchOtherSupportBackrest1 = new THREE.Mesh(
  new THREE.BoxGeometry(5, 1, 1),
  material
);
benchOtherSupportBackrest1.position.y = 6;
benchOtherSupportBackrest1.position.x = -14;
benchOtherSupportBackrest1.position.z = -12;
benchOtherSupportBackrest1.rotateZ(-1);
const benchOtherSupportBackrest2 = new THREE.Mesh(
  new THREE.BoxGeometry(5, 1, 1),
  material
);
benchOtherSupportBackrest2.position.y = 6;
benchOtherSupportBackrest2.position.x = -14;
benchOtherSupportBackrest2.position.z = 12;
benchOtherSupportBackrest2.rotateZ(-1);
const benchOtherBackrest = new THREE.Mesh(
  new THREE.BoxGeometry(2, 1, 25),
  material
);
benchOtherBackrest.position.y = 7;
benchOtherBackrest.position.x = -14;
benchOtherBackrest.position.z = 0;
benchOtherBackrest.rotateZ(-1);

completedBench = [
  bench,
  benchLeg1,
  benchLeg2,
  benchLeg3,
  benchLeg4,
  benchSupportBackrest1,
  benchSupportBackrest2,
  benchBackrest,
  otherBench,
  otherBenchLeg1,
  otherBenchLeg2,
  otherBenchLeg3,
  otherBenchLeg4,
  benchOtherSupportBackrest1,
  benchOtherSupportBackrest2,
  benchOtherBackrest,
];

export { completedBench };
