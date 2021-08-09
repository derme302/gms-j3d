// J3D MOD LIGHTS
function j3d_light_define_point(x,y,z,scene) {
	// create a point light
	var light = new THREE.PointLight(0xFFFFFF);

	// set its position
	light.position.x = x;
	light.position.y = y;
	light.position.z = z;

	// add to the scene
	arr_scenes[scene].add(light);
	
	// Update the array
	arr_lights[arr_lights_ind] = light;
	
	arr_lights_ind += 1;
	return arr_lights_ind - 1;
}