;(function(){
  'use strict';
  //core modules
  var cluster = require('cluster');
  var master = require('./master.js').master;
  var worker = require('./worker.js').worker;

  if( cluster.isMaster ){
    master();
  }else if( cluster.isWorker ){
    worker();
  }

  //the sum of 0 to 99 is 4950

})();