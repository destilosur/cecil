import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import gsap from 'gsap';

const etiqueta = document.querySelector('#etiqueta');
const rotateH1 = document.querySelector('#rotate');

let anim = false;
function createControls(camera, canvas) {
	const controls = new OrbitControls(camera, canvas);

	controls.target.set(46, 10.0, 0.0);
	// controls.target.copy(cube.position);
    
	// controls.enableDamping = true;
    
	//tick
	let metrosPorSeg = 0.03;
	let suma = 0;
    
	controls.tick = delta => {
        let zoomCam = camera.getFocalLength();
        
        if ( anim == true && zoomCam < 45 ) {
            suma += delta * metrosPorSeg;
            camera.lookAt(46, 10.0, 0.0);
            camera.position.x -= suma * 2.0; 
            camera.position.y -= suma * 0.2;
            camera.setFocalLength(zoomCam + suma); 
          
        }		
		else{ 
            controls.update(); //ahora si funciona la rotacion en gsap anim
		}
	};

	// ---------------------------animacion -------------------------------------
	const toRad = grad => (grad * Math.PI) / 180;

	// Animacion Gsap
	etiqueta.addEventListener('mouseover', () => animationIn());
	etiqueta.addEventListener('mouseout', () => animationOut());
	rotateH1.addEventListener('mouseover', () => rotateAnimationOn());
	rotateH1.addEventListener('mouseout', () => rotateAnimationOff());
	
	function animationIn() {
		controls.enabled = false;
		anim = true;        
    }
	function animationOut() {
		controls.enabled = true;
		anim = false;        
    }
	function rotateAnimationOn() {
		controls.enabled = true;
		controls.autoRotate = true;
        controls.autoRotateSpeed = 2;        
    }
	function rotateAnimationOff() {
		controls.enabled = true;       
		controls.autoRotate = false;        
    }



    
	return controls;
}

export { createControls };
