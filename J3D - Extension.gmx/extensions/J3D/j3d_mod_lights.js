// J3D MOD LIGHTS
function j3d_light_define_point(x,y,z) {
	// create a point light
	var light = new THREE.PointLight(0xFFFFFF);

	// set its position
	light.position.x = x;
	light.position.y = y;
	light.position.z = z;

	// add to the scene
	scene.add(light);
}