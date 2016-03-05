'use strict';

var theTwins = (function () {
  var twinsCanvas = document.getElementById('twins');

  function message(text){
    console.log(text);
  }

  function init(){
    var stage = new createjs.Stage(twinsCanvas);
    stage.autoClear = true;

    var redHead = new createjs.Bitmap("../images/twin-red-head.png");
    redHead.x = 200;
    redHead.y = 120;
    redHead.scaleX = 0.4;
    redHead.scaleY = 0.4;
    redHead.rotation = 10;

    redHead.regX = redHead.regY = 110;

    var tweenRedHead = createjs.Tween.get(redHead, {loop: true})
    .to({y: 90, rotation: 10}, 500, createjs.Ease.linear)
    .to({rotation: -10}, 500, createjs.Ease.linear)
    .to({y: 150}, 1000, createjs.Ease.linear)
    .to({rotation: 10}, 500, createjs.Ease.linear)
    .to({y: 120}, 500, createjs.Ease.linear);

    var redbody1 = new createjs.Bitmap("../images/twin-red-body1.png");
    redbody1.x = 250;
    redbody1.y = 120;
    redbody1.scaleX = 0.4;
    redbody1.scaleY = 0.4;
    redbody1.rotation = 8;

    redbody1.regX = 200;
    redbody1.regY = 100;

    var tweenRedBody1 = createjs.Tween.get(redbody1, {loop: true})
    .to({y: 90, rotation: 8}, 500, createjs.Ease.linear)
    .to({rotation: -8}, 500, createjs.Ease.linear)
    .to({y: 150}, 1000, createjs.Ease.linear)
    .to({rotation: 8}, 500, createjs.Ease.linear)
    .to({y: 120}, 500, createjs.Ease.linear);

    stage.addChild(redbody1);
    stage.addChild(redHead);

    createjs.Ticker.addEventListener('tick', stage);
  }

  return {
      init: init,
      ready: message('ready')
  };

})();

theTwins.ready;
