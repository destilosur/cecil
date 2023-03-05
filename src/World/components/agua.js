import {
	BoxBufferGeometry,
	PlaneGeometry,
	SphereGeometry,
	Mesh,
	MeshStandardMaterial,
	MathUtils,
	TextureLoader,
	Vector2,
	RepeatWrapping,
	DoubleSide,
	sRGBEncoding,
} from 'three';

import { Water } from 'three/examples/jsm/objects/Water2.js';

function createWater() {
	const waterGeometry = new PlaneGeometry(500, 500);

	const textureLoader = new TextureLoader();
	const flowMap = textureLoader.load('./textures/flowRiver.png');

	const water = new Water(waterGeometry, {
		scale: 3,
		textureWidth:  512,
		textureHeight: 512,
		flowSpeed: 0.009,
		reflictivity: .35,
		flowMap: flowMap,
		color: '#fdfdff',
		
		
	});
	water.position.y = 1.2;
	water.rotation.x = -Math.PI / 2;
	water.material.fog = true;
	
	

	water.tick = () =>{

	}

	return water;
}

export { createWater };
