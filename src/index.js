import { World } from './World/World.js';

const boton = document.querySelector('#boton');
const audio = document.querySelector('#audioMp3');
const labelAudio = document.querySelector('#label-audio');

let isOn = true;


async function main() {
	const container = document.querySelector('#scene-container');

	const world = new World(container);

	await world.init();

	// produce a single frame (render on demand)
	// world.render();

	world.start();
	// world.stop();

	const toggle = () => {
		if (!isOn) {
			isOn = true;
			boton.classList.toggle('btn-on');
			boton.classList.toggle('btn-off');
			audio.play();
			return world.start();
		}

		isOn = false;
		boton.classList.toggle('btn-on');
		boton.classList.toggle('btn-off');
		audio.pause();
		return world.stop();
	};

	// start the loop (produce a stream of frames)
	boton.addEventListener('click', toggle);
	labelAudio.addEventListener('click', play);

	function play(){
		audio.play();
	}

}

main().catch((err) => {
	console.error(err);
  });
