if (keyboard_check(vk_left)) then direction -= 1;
if (keyboard_check(vk_right)) then direction += 1;
if (keyboard_check(vk_up)) then speed = 1;
if (keyboard_check(vk_down)) then speed = -1;

image_angle = direction;

j3d_camera_update(x,y,z,-pi/2,((direction-90) * pi / 180),pi,global.camera);

