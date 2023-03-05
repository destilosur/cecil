const setSize = (container, camera, renderer) => {
	camera.aspect = container.clientWidth / container.clientHeight;
	camera.updateProjectionMatrix();
  
	renderer.setSize(container.clientWidth, container.clientHeight);
	// Tambien le podemos dar un tamaño custom en pixeles
	// renderer.setSize(700,400); 

	//calidad del renderizado puedes ponerlo en 2 o en 4 pero sera mucho gasto
	renderer.setPixelRatio(window.devicePixelRatio);
	// console.log(window.devicePixelRatio);// 1.10
	// Renderiza y estira la imagen al tamaño con valores menores de 1 se pixela
	// renderer.setPixelRatio(0.1);
  };
  
  class Resizer {
	constructor(container, camera, renderer) {
	  // set initial size on load
	  setSize(container, camera, renderer);

	  window.addEventListener("resize", () => {
		// set the size again if a resize occurs
		setSize(container, camera, renderer);
		// this.onResize(); // ahora esta el loop js 
	  });

	}
	
	// onResize() {}

  }
  
  export { Resizer };