import { GUI } from 'dat.gui';

function createPanel(materialColor, objPosition) {
	const gui = new GUI();

	//color
	if (materialColor) {
		if (materialColor.isColor) {
			const materialParams = {
				color: materialColor.getHex(),
			};

			gui.addColor(materialParams, 'color').onChange(value => materialColor.set(value));
		}
	}

	//position
	if (objPosition) {
		gui.add(objPosition, 'x').min(-30).max(200).step(0.01);
		gui.add(objPosition, 'y').min(-30).max(60).step(0.01);
		if (objPosition.isVector3) gui.add(objPosition, 'z').min(-100).max(60).step(0.01);
	}

	return gui;
}

export { createPanel };
