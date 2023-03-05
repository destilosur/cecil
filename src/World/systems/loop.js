import { Clock, MathUtils } from 'three';

const clock = new Clock();

class Loop {
	constructor(camera, scene, renderer) {
		this.camera = camera;
		this.scene = scene;
		this.renderer = renderer;
		this.updatables = [];
	}

	start() {
		this.renderer.setAnimationLoop(() => {
			// tell every animated object to tick forward one frame
			this.tick();
			this.renderer.render(this.scene, this.camera);
		});
	}

	stop() {
		this.renderer.setAnimationLoop(null);
	}

	tick() {
		// only call the getDelta function once per frame!
		const delta = clock.getDelta();// nos da en seg (0.0017) 17 milisegundos mas o menos

		// console.log(`The last frame rendered in ${delta * 1000} milliseconds`);

		for (const object of this.updatables) {
      //se lo pasamos al método
			object.tick(delta); // este método esta en el modulo del objeto c/obj tiene un tick personal
		}
	}
}

export { Loop };
