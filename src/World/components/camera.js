import { PerspectiveCamera, MathUtils, Clock } from 'three';


import { createPanel } from '../systems/panel-control.js';



function createCamera() {
	const camera = new PerspectiveCamera(
		100, // fov = Field Of View
		1, // aspect ratio (dummy value)
		0.1, // near clipping plane
		1000 // far clipping plane
	);

	// move the camera back so we can view the scene
	camera.position.set(-20, 20, 70);
	camera.lookAt(46, 10.0, 0.0);

	

	// const panel = createPanel(camera.position, camera.position);
		

  //tick
  
	camera.tick = delta => {
		
    
	};

	



	return camera;
}

export { createCamera };
