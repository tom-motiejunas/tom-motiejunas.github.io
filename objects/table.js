import * as THREE from "three";

const material = new THREE.MeshStandardMaterial({ color: 0xdb6b24 });

let table = new Array();

const tableTop = new THREE.Mesh(new THREE.BoxGeometry(10, 1, 25), material);
tableTop.position.y = 8;

const tableLeg1 = new THREE.Mesh(new THREE.BoxGeometry(1, 12, 1), material);
tableLeg1.position.y = 4;
tableLeg1.position.z = 11.9;
tableLeg1.rotateZ(1);

const tableLeg2 = new THREE.Mesh(new THREE.BoxGeometry(1, 12, 1), material);
tableLeg2.position.y = 4;
tableLeg2.position.z = 11.9;
tableLeg2.rotateZ(-1);

const tableLeg3 = new THREE.Mesh(new THREE.BoxGeometry(1, 12, 1), material);
tableLeg3.position.y = 4;
tableLeg3.position.z = -11.9;
tableLeg3.rotateZ(1);

const tableLeg4 = new THREE.Mesh(new THREE.BoxGeometry(1, 12, 1), material);
tableLeg4.position.y = 4;
tableLeg4.position.z = -11.9;
tableLeg4.rotateZ(-1);

table = [tableTop, tableLeg1, tableLeg2, tableLeg3, tableLeg4];

export { table };
