function j3d_start(scene_width,scene_height) {	
	// set the scene size
	WIDTH = scene_width;
	HEIGHT = scene_height;

	var $container = $('#container'); // get the DOM element to attach to

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(WIDTH, HEIGHT);
	$container.append(renderer.domElement); // attach the render-supplied DOM element

	model = [];
	light = [];
}

function j3d_scene_create_perspective() {	
	var ASPECT = WIDTH/HEIGHT;
	
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(75, ASPECT, 0.1, 10000);
	
	var animate = function () {
		// note: three.js includes requestAnimationFrame shim
		// Animate stuff
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}
	
	animate();
}

function j3d_camera_update(x, y, z, xi, yi, zi) {
	camera.position.x = x;
	camera.position.y = y;
	camera.position.z = z;
	
	camera.rotation.x = xi;
	camera.rotation.y = yi;
	camera.rotation.z = zi;
}

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

function j3d_render() {
	
}

function j32_scene_remove(id) {
	scene.remove( id );
	// may cause memory leaks
}