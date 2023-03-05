import { createCamera } from './components/camera.js';
import { createWater } from './components/agua.js';
import { loadModels } from './components/models-import/models.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';
import { createPanel } from './systems/panel-control.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;
let controls;
let panel;

class World {
	constructor(container) {
		renderer = createRenderer();
		container.append(renderer.domElement);
		scene = createScene();
		camera = createCamera();
		loop = new Loop(camera, scene, renderer);
		controls = createControls(camera, renderer.domElement);

		//Mesh
		const water = createWater();

		const { spotLight, spotLightHelper, pointL, pointHelper } = createLights();

		//scene

		scene.add(water, pointL, spotLight);

		// loop
		loop.updatables.push(controls);

		const resizer = new Resizer(container, camera, renderer);

		//panel control
		// panel = createPanel(null, pointL.position);
	}

	render() {
		renderer.render(scene, camera);
	}

	start() {
		loop.start();
	}

	stop() {
		loop.stop();
	}

	// carga modelos asincronos
	async init() {
		const muelle = await loadModels();

		

		// controls.target.copy(muelle.children[3].position);
		//
		scene.add(muelle);

		// panel = createPanel(null, muelle.position);
		//
		// 		loop.updatables.push(parrot, flamingo, stork);
	}
}
export { World };
