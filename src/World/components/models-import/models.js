import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { setupModel } from './setupModel.js';

async function loadModels() {
	const loader = new GLTFLoader();

	const [muelleData] = await Promise.all([loader.loadAsync('./models/muelleCecil3.glb')]);


	
	const muelle = setupModel(muelleData);
	// console.log('muelle', muelle);

	muelle.scale.multiplyScalar(4.5);
	muelle.position.set(46, 1.3, -0);
	muelle.rotation.set(0, 0, 0);
	
	return muelle;
}

export { loadModels };
