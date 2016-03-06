'use strict';

var theTwins = (function () {
  var twinsCanvas = document.getElementById('canvas-twins'),
      stage       = new createjs.Stage(twinsCanvas),
      xspacing    = 30,    // Distance between each horizontal location
      theta       = 0.0,   // Start angle at 0
      amplitude   = 20.0,  // Height of wave
      period      = 450.0, // How many pixels before the wave repeats
      dx,                  // Value for incrementing x
      plntCfg = {
        'size': 40,
        'maxTime': 5000,
        'minTime': 3000,
        'maxAccel': 121,
        'minAccel': 40,
        'imgRed': 'planetred',
        'imgBlue': 'planetblue'
      },// Configuration planet object
      sectionSize = 30;    // Size of boxes and each square of animation(Twins)

  function msg(text){
    console.log(text);
  }

  function init(){
    stage.autoClear = true;
    dx = ((2 * Math.PI) / period) * xspacing;
    //Initiate twins function
    initTwins();
    //Initiate planet function
    thePlanets.init();
    //Initiate stars function
    theStars.init();
    //Start thick, like Draw(), 1 call per frame
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', tick);
  }

  function initTwins(){
    //Creating Twins
    createTwin('red', '#ccc', sectionSize, 0, 'circle');
    for(var x = 1; x < 26; x++){
      createTwin('red', '#ed187d', sectionSize, x);
    }
    for(var x = 1; x < 26; x++){
      createTwin('blue', '#716e9a', sectionSize, x);
    }
    createTwin('blue', '#ccc', sectionSize, 26, 'circle');
  }

  function createTwin(type, color, size, index, circle){
    var shape, graphics;
    if(circle === 'circle'){
      graphics = new createjs.Graphics().beginFill(color).drawCircle(15, 15, size/2);
    }else{
      graphics = new createjs.Graphics().beginFill(color).drawRect(0, 0, size, size);
    }

    var shape = new createjs.Shape(graphics);
    shape.regX = shape.regY = sectionSize/2;
    shape.x = sectionSize*(index+2);
    shape.twinType = type;
    stage.addChild(shape);
  }

  function moveTwins(){
    // Increment theta (try different values for
    // 'angular velocity' here
    theta += 0.045;
    // For every x value, calculate a y value with sine function
    var x = theta;

    var redChildren = stage.children.filter(function(element){
      return element.twinType === 'red';
    });

    $.each(redChildren.reverse(), function(key, twin){
      twin.y = Math.sin(x)*amplitude+145;
      twin.rotation = Math.sin(x)*5;
      x+=dx;
    });

    x = theta;
    var blueChildren = stage.children.filter(function(element){
      return element.twinType === 'blue';
    });
    $.each(blueChildren, function(key, twin){
      twin.y = Math.sin(x)*amplitude+455;
      twin.rotation = Math.sin(x)*5;
      x+=dx;
    });
  }

  function tick(event){
    moveTwins();
    thePlanets.move();
    stage.update(event);
  }

  return {
      init: init,
      ready: msg('ready twins'),
      stage: stage
  };

})();

theTwins.ready;
