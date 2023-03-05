// import { AnimationMixer } from 'three';
import { Group, RepeatWrapping, TextureLoader } from 'three';
import { createPanel } from '../../systems/panel-control.js';

function setupModel(data) {
	const model = data.scene.children[0];
	const tablaMuelle = model.children[1];	

	// mesh1.material.color.setHex(0x523636);
	// mesh1.material.color.reflectivity = 0;
	// mesh1.material.roughness = 0.8;

	tablaMuelle.material.setValues({
		color : '#260E01',
		reflectivity: 0.28,
	// 	sheenRoughness: 0.5,
		roughness: 1.0,
	// 	aoMap: aoTexture,
	// 	aoMapIntensity: 2,
		metalness: 0,
		fog: true,
	//
	});

	// 	// mesh2.material.opacity = 1.0;
	// 	// mesh2.material.transparent = true;
	//
	// 	console.log(mesh2.material.reflectivity );

	// const panel = createPanel(mesh2.material.color, mesh2.material.aoMap.offset);




	//animacion-------------------------------------------------------------------------------
	// const clip = data.animations[0];

	// const mixer = new AnimationMixer(model);
	// const action = mixer.clipAction(clip);
	// 	action
	// 	.startAt(2)
	// 	.setEffectiveTimeScale(1.5)
	// 	.halt(48)
	// 	.play();
	//
	// 	model.tick = delta => mixer.update(delta);

	return model;
}
export { setupModel };
