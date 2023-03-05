import { WebGLRenderer } from 'three';

function createRenderer() {
	const renderer = new WebGLRenderer({ antialias: true });

	// para que la luz actue correctamente
	renderer.physicallyCorrectLights = true;
	// renderer.shadowMap.enabled = true;
	// renderer.shadowMap.type = PCFSoftShadowMap;

	return renderer;
}

export { createRenderer };
