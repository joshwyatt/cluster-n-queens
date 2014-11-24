;(function(){
  'use strict';

  var cluster = require('cluster');
  var master = require('./master.js');
  var worker = require('./worker.js');

  if( cluster.isMaster ){
    master();
  }else{
    worker();
  }
}();