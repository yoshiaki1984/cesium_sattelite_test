(function() {
  "use strict";

  var viewer = new Cesium.Viewer("cesium");

　var viewer = new Cesium.Viewer('cesiumContainer', {
  baseLayerPicker: false,
  timeline : false,
  animation : false,
  homeButton: false,
  vrButton: false,
  geocoder:false,
  sceneModePicker:false,
  navigationHelpButton:false


});

}());