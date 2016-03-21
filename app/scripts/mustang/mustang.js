'use strict';

var theMustang = (function () {
  var twinsCanvas = document.getElementById('canvas-mustang');

  function msg(text){
    console.log(text);
  }

  function createMustang(){

  }

  function tick(event){
  }

  function initMustang(){
  }

  function init(){
  }

  return {
      init: init,
      ready: msg('ready mustang')
  };

})();

(function(){
  return theMustang.ready;
})();
