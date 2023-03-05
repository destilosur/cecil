import {
	DirectionalLight,
	DirectionalLightHelper,
	PointLight,
	AmbientLight,
	HemisphereLight,
	HemisphereLightHelper,
	RectAreaLight,
	SpotLight,
	SpotLightHelper,
	PointLightHelper,
	MathUtils,
} from 'three';

function createLights() {
	const width = 10;
	const height = 10;
	const intensity = 500;

	// indirecta
	const spotLight = new SpotLight('#E1694E', intensity);
	spotLight.position.set(2, 22, 1);
	const spotLightHelper = new SpotLightHelper(spotLight);

	// Directa
	const pointL = new PointLight('#E28678', 600);
	pointL.position.set(9.0, 19.42, -2);
	const pointHelper = new PointLightHelper(pointL);

	return { spotLight, pointL, spotLightHelper, pointHelper };
}

export { createLights };
