import * as THREE from "three";

const material = new THREE.MeshStandardMaterial({ color: 0x857e7e });

let laptop;

const laptopMonitor = new THREE.Mesh(
  new THREE.BoxGeometry(5, 0.1, 3),
  material
);
const laptopScreen = new THREE.Mesh(
  new THREE.BoxGeometry(4.5, 0.1, 2.5),
  new THREE.MeshStandardMaterial({ color: 0x2a2c33 })
);
const laptopKeyboard = new THREE.Mesh(
  new THREE.BoxGeometry(5, 0.1, 3),
  material
);

laptopKeyboard.position.y = 8.5;
laptopKeyboard.position.z = 9;
laptopKeyboard.position.x = 2;

laptopKeyboard.rotateY(0.5);

laptopMonitor.position.y = 9.6;
laptopMonitor.position.z = 7;
laptopMonitor.position.x = 0.9;

laptopMonitor.rotateY(0.5);
laptopMonitor.rotateX(0.9);

laptopScreen.position.y = 9.8;
laptopScreen.position.z = 7.2;
laptopScreen.position.x = 0.9;

laptopScreen.rotateY(0.5);
laptopScreen.rotateX(0.9);

laptop = [laptopKeyboard, laptopMonitor, laptopScreen];

export { laptop };
