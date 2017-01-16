'use strict';

var thePlanets = (function () {
  var plntCfg = {
        'size': 40,
        'maxTime': 5000,
        'minTime': 3000,
        'maxAccel': 121,
        'minAccel': 40,
        'imgRed': 'planetred',
        'imgBlue': 'planetblue',
        'imagePath': 'images/'
      };

  function msg(text){
    console.log(text);
  }

  function initPlanets(type){
    var randTime = parseInt(Math.random() * (plntCfg.maxTime - plntCfg.minTime) + plntCfg.minTime);
    var randAccel = parseInt(Math.random() * (plntCfg.maxAccel - plntCfg.minAccel) + plntCfg.minAccel);
    setTimeout(function(){
      if(type === 'blue'){
        createPlanet(randAccel, 'blue');
        initPlanets('red');
      }else{
        createPlanet(randAccel, 'red');
        initPlanets('blue');
      }
    }, randTime);
  }

  function createPlanet(accel, type){
    var planet,
        randPlanet = parseInt(Math.random() * (6 - 1) + 1);
    if(type === 'red'){
      planet = new createjs.Bitmap(plntCfg.imagePath + plntCfg.imgRed + randPlanet + '.png');
      planet.y = parseInt(Math.random() * (550 - 350) + 310);
      planet.x = 945;
    }else{
      planet = new createjs.Bitmap(plntCfg.imagePath + plntCfg.imgBlue + randPlanet + '.png');
      planet.y = parseInt(Math.random() * (250 - 50) + 40);
      planet.x = -45;
    }
    planet.scaleX = accel / 100;
    planet.scaleY = accel / 100;
    planet.pType = type;
    planet.accel = accel;
    theTwins.stage.addChildAt(planet, 0);
  }

  function movePlanets(){
    var planetsRed = theTwins.stage.children.filter(function(element){
      return element.pType === 'red';
    });
    $.each(planetsRed, function(key, planet){
      planet.x = planet.x - (planet.accel / 80);
      if(planet.x < -45){
        theTwins.stage.removeChild(planet);
      }
    });
    var planetsBlue = theTwins.stage.children.filter(function(element){
      return element.pType === 'blue';
    });
    $.each(planetsBlue, function(key, planet){
      planet.x = planet.x + (planet.accel / 80);
      if(planet.x > 945){
        theTwins.stage.removeChild(planet);
      }
    });
  }

  function init(){
    //Initiate planet function
    initPlanets('blue');
  }

  return {
      init: init,
      ready: msg('ready planets'),
      move: movePlanets
  };

})();

(function(){
  return thePlanets.ready;
})();
