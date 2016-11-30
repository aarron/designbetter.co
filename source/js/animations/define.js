var Waypoint = require('waypoints');
require('browsernizr/test/touchevents');
var Modernizr = require('browsernizr');

var canvas, stage, exportRoot;
var init = function() {
  canvas = document.getElementById("define-animation");
  if (canvas) {
    handleComplete();
  }
}
function handleComplete() {
  var container = $('#define-animation-container');
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  exportRoot = new defineLib.Satellite2();
  stage = new createjs.Stage(canvas);
  stage.addChild(exportRoot);
  //Registers the "tick" event listener.
  createjs.Ticker.setFPS(defineLib.properties.fps);
  createjs.Ticker.addEventListener("tick", stage);
  setTimeout(function(){
    createjs.Ticker.removeEventListener("tick", stage);
  }, 1);

  //Code to support hidpi screens and responsive scaling.
  (function(isResp, respDim, isScale, scaleType) {
    var lastW, lastH, lastS=1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = defineLib.properties.width, h = defineLib.properties.height;
      var iw = container.width(), ih=container.height();
      var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;

      sRatio = xRatio;

      canvas.width = w*pRatio*sRatio;
      canvas.height = h*pRatio*sRatio;
      canvas.style.width = w*sRatio+'px';
      canvas.style.height = h*sRatio+'px';
      stage.scaleX = pRatio*sRatio;
      stage.scaleY = pRatio*sRatio;
      lastW = iw; lastH = ih; lastS = sRatio;

      stage.update();
    }
  })(true,'width',true,1);

  // code to stop and play the animation in and out of hover
  container.hover( function() {
    exportRoot.timeline.removeEventListener("change", timelineChange);
    createjs.Ticker.addEventListener("tick", stage);
    exportRoot.invPlaying = true;
    exportRoot.play();

    exportRoot.stars_mc.invPlaying = true;
    exportRoot.stars_mc.play();

    exportRoot.satellite_mc.invPlaying = true;
    exportRoot.satellite_mc.play();
  }, function() {
    exportRoot.timeline.addEventListener("change", timelineChange);
  });

  if (Modernizr.touchevents) {
    var waypoint = new Waypoint({
      element: container,
      offset: '50%',
      handler: function(direction) {
        createjs.Ticker.addEventListener("tick", stage);
        exportRoot.invPlaying = true;
        exportRoot.play();

        exportRoot.stars_mc.invPlaying = true;
        exportRoot.stars_mc.play();

        exportRoot.satellite_mc.invPlaying = true;
        exportRoot.satellite_mc.play();

        exportRoot.timeline.addEventListener("change", timelineChange);
      }
    });
  }

  var timelineChange = function(e) {
    if (e.target.position === 0) {
      exportRoot.timeline.removeEventListener("change", timelineChange);
      createjs.Ticker.removeEventListener("tick", stage);
      exportRoot.invPlaying = false;
      exportRoot.stars_mc.invPlaying = false;
      exportRoot.satellite_mc.invPlaying = false;
    }
  }
}

module.exports = {
  init: init
}
