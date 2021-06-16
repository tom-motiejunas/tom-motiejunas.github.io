import * as THREE from "three";

let umbrella;

const colors = new THREE.TextureLoader().load("../imgs/umbrellaColors.png");

const umbrellaColumn = new THREE.Mesh(
  new THREE.BoxGeometry(1, 30, 1),
  new THREE.MeshStandardMaterial({ color: 0xdb6b24 })
);
umbrellaColumn.position.y = 15;

const umbrellaRoof = new THREE.Mesh(
  new THREE.ConeGeometry(18, 10, 18, 8, true),
  new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    map: colors,
  })
);

umbrellaRoof.position.y = 30;

umbrella = [umbrellaColumn, umbrellaRoof];

export { umbrella };
