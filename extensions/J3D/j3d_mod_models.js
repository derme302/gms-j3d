// J3D MOD SHAPES
function j3d_create_model_gltf(x, y, z, url, scene) {
	let gltfLoader = new THREE.GLTFLoader();

  	gltfLoader.load(url, (gltf) => {
		arr_models[arr_models_ind] = gltf.scene;
		var model = arr_models[arr_models_ind];

		model.position.x = x;
		model.position.y = y;
		model.position.z = z;

    		s = arr_scenes[scene];
		s.add(model);
  	});
}
