'use strict';

var theStars = (function () {
  var canvas, screenH, screenW, stars = [], numStars = 300;

  function msg(text){
    console.log(text);
  }

  /**
  * Star
  *
  * @param int x
  * @param int y
  * @param int length
  * @param opacity
  */
  function Star(x, y, length, opacity) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.length = parseInt(length);
    this.opacity = opacity;
    this.factor = 1;
    this.increment = Math.random() * .03;
    this.draw();
  }

  /**
  * Draw a star
  *
  * This function draws a start.
  */
  Star.prototype.draw = function() {
    var shape, graphics;
    graphics = new createjs.Graphics().beginFill('#fff').drawCircle(this.x, this.y, this.length);
    var shape = new createjs.Shape(graphics);
    shape.alpha = this.opacity;
    shape.star = true;
    this.shape = shape;
    createjs.Tween.get(shape, { loop:true })
         .wait(100)
         .to({alpha:Math.random()}, 1500)
         .to({alpha:Math.random()}, 1500)
         .to({alpha:this.opacity}, 1500);
    theTwins.stage.addChildAt(shape, 0);
  }

  function init(){
    // Calculate the screen size
    // Get the canvas
    canvas = $('#canvas-twins');

    screenH = canvas.height();
    screenW = canvas.width();

    // Create all the stars
    for(var i = 0; i < numStars; i++) {
        var x = Math.round(Math.random() * screenW);
        var y = Math.round(Math.random() * screenH);
        var length = 1 + Math.random() * 2;
        var opacity = Math.random();
        // Create a new star and draw
        var star = new Star(x, y, length, opacity);
        // Add the the stars array
        stars.push(star);
    }
  }

  return {
      init: init,
      ready: msg('ready stars')
  };

})();

theStars.ready;
