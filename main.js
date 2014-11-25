;(function(){
  'use strict';
  //command line args
  var n = +process.argv[2];
  var rowToStartAt = +process.argv[3];

  //core modules
  var cluster = require('cluster');
  //file modules. Order is important, we're using countSolutionArgs elsewhere
  var countSolutionsArgs = module.exports.countSolutionsArgs = require('./makeArgs')(n, rowToStartAt);
  var master = require('./master.js');
  var worker = require('./worker.js');

  if( cluster.isMaster ){
    master();
  }else if( cluster.isWorker ){
    worker();
  }

})();