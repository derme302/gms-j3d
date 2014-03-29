// J3D MOD SHAPES
function j3d_create_block(obj, x, y, z, xl, yl, zl, col) {
	var geometry = new THREE.CubeGeometry(xl, yl, zl);
	var material = new THREE.MeshLambertMaterial({ color: eval(col) });
	
	model[obj] = new THREE.Mesh(geometry, material);
	model[obj].position.x = x;
	model[obj].position.y = y;
	model[obj].position.z = z;
	
	// add cube to scene
	scene.add(model[obj]);
}

function j3d_create_sphere(obj, x, y, z, r, seg, rings) {
	var geometry = new THREE.SphereGeometry(r, seg, rings);
	
	var material = new THREE.MeshLambertMaterial({ color: 0xCC0000 });
	model[obj] = new THREE.Mesh(geometry, material);
	model[obj].position.x = x;
	model[obj].position.y = y;
	model[obj].position.z = z;
	
	// add the sphere to the scene
	scene.add(model[obj]);
}


function j3d_model_rotation_add(obj,xi,yi,zi) {
	model[obj].rotation.x += xi;
	model[obj].rotation.y += yi;
	model[obj].rotation.z += zi;
}

function j3d_model_translation_set(obj, xt, yt, zt) {
	model[obj].position.x = xt;
	model[obj].position.y = yt;
	model[obj].position.z = zt;
}