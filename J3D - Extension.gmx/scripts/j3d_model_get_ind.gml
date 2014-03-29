/***************************************************
  j3d_model_get_ind()
  Retunrns next availible model index
 ***************************************************/
var i = global.model_ind;
global.model_ind += 1;
return i;
