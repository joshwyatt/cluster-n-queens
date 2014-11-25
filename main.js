;(function(){
  'use strict';

  var cluster = require('cluster');
  var master = require('./master.js');
  var worker = require('./worker.js');

  var makeArgs = require('./makeArgs');
  var countSolutions = require('./countSolutions');

  var n = +process.argv[2];
  var rowToStartAt = +process.argv[3];
  console.log(rowToStartAt);

  module.exports.countSolutionsArgs = makeArgs(n, rowToStartAt);
  console.log('in main: ' + module.exports.countSolutionsArgs);

  if( cluster.isMaster ){
    master();
  }else if( cluster.isWorker ){
    worker();
  }

})();