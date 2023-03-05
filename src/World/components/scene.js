import { Color, Scene, TextureLoader, GridHelper, Fog, CubeTextureLoader, RepeatWrapping, Vector2, EquirectangularReflectionMapping } from 'three';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

function createScene() {
	const scene = new Scene();

	//bg
	// const textureLoader = new TextureLoader();
	// scene.background = textureLoader.load('./textures/bg1.jpg');

	// cube bg
	new CubeTextureLoader()
		.setPath('./textures/cubemap/')
		.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], function(texture){
			// texture.wrapS = RepeatWrapping;
			// texture.wrapT = RepeatWrapping;
			// texture.repeat.set(40,40);
			scene.background = texture;
			scene.environment = texture;

		});

	
	
	// hdri
	// const hdriBg = new RGBELoader().load('./textures/hdriBg1.hdr', function(texture){
	// 	texture.mapping = EquirectangularReflectionMapping;
	// 	scene.background = texture;
	// 	scene.environment = texture;
	// });



	//fog
	scene.fog = new Fog('#343939', 130, 11);

	// scene.background = new Color('#343233');
	//  backgroundTexture;
	

	const grid = new GridHelper(100, 100);
	// scene.add(grid);

	return scene;
}

export { createScene };
