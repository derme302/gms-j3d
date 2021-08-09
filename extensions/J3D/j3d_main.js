// J3D MAIN

var arr_scenes = [];
var arr_scenes_ind = 0;
var arr_renderers = [];
var arr_renderers_ind = 0;
var arr_cameras = [];
var arr_cameras_ind = 0;
var arr_models = [];
var arr_models_ind = 0;
var arr_lights = [];
var arr_lights_ind = 0;


function j3d_scene_create() {
	arr_scenes[arr_scenes_ind] = new THREE.Scene();
	
	arr_scenes_ind += 1;
	return arr_scenes_ind - 1;
}

function j3d_camera_perspective_create() {
	arr_cameras[arr_cameras_ind] = new THREE.PerspectiveCamera( 75, 640/480, 1, 10000 );
	arr_cameras[arr_cameras_ind].position.z = 1000;
	
	arr_cameras_ind += 1;
	return arr_cameras_ind - 1;
}

function j3d_camera_update(x, y, z, xi, yi, zi, camera) {
	var cam = arr_cameras[camera];

	cam.position.x = x;
	cam.position.y = y;
	cam.position.z = z;
	
	cam.rotation.x = xi;
	cam.rotation.y = yi;
	cam.rotation.z = zi;
}

function j3d_renderer_create() {
	var $container = $('#container'); // get the DOM element to attach to

	arr_renderers[arr_renderers_ind] = new THREE.WebGLRenderer( {alpha: true} );
	arr_renderers[arr_renderers_ind].setSize(640 , 480 );

	//document.body.appendChild( renderer.domElement );
	
	//renderer = new THREE.WebGLRenderer();
	//renderer.setSize(WIDTH, HEIGHT);
	
	$container.append(arr_renderers[arr_renderers_ind].domElement); // attach the render-supplied DOM element
	
	arr_renderers_ind += 1;
	return arr_renderers_ind - 1;
}

function j3d_render(renderer, scene, camera) {
	arr_renderers[renderer].render( arr_scenes[scene], arr_cameras[camera] );
}