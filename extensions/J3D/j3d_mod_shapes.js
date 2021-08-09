// J3D MOD SHAPES
function j3d_create_block(x, y, z, xl, yl, zl, col, scene) {
	var geometry = new THREE.BoxGeometry(xl, yl, zl);
	var material = new THREE.MeshLambertMaterial({ color: eval(col) });
	
	arr_models[arr_models_ind] = new THREE.Mesh(geometry, material);
	var model = arr_models[arr_models_ind];
	
	model.position.x = x;
	model.position.y = y;
	model.position.z = z;
	
	// add cube to scene
	s = arr_scenes[scene];
	s.add(model);
	
	arr_models_ind += 1;
	return arr_models_ind - 1;
}

function j3d_create_sphere(obj, x, y, z, r, seg, rings, scene) {
	var geometry = new THREE.SphereGeometry(r, seg, rings);
	var material = new THREE.MeshLambertMaterial({ color: 0xCC0000 });
	
	arr_models[arr_models_ind] = new THREE.Mesh(geometry, material);
	var model = arr_models[arr_models_ind];
	
	model.position.x = x;
	model.position.y = y;
	model.position.z = z;
	
	// add the sphere to the scene
	arr_scenes[scene].add(model);
	
	arr_models_ind += 1;
	return arr_models_ind - 1;
}


function j3d_model_rotation_add(obj,xi,yi,zi) {
	var model = arr_models[obj];

	model.rotation.x += xi;
	model.rotation.y += yi;
	model.rotation.z += zi;
}

function j3d_model_translation_set(obj, xt, yt, zt,scene) {
	var model = arr_models[obj];

	model.position.x = xt;
	model.position.y = yt;
	model.position.z = zt;
}