;(function(){
  'use strict';
  //core modules
  var cluster = require('cluster');

  var total = 0;
  //just a cheezy way to get a bunch of fn arguments
  var fnArgs = [];
  for(var j = 0; j < 100; j++){
    fnArgs.push(j);
  }
  
  function master(){
    var numberOfCPUs = require('os').cpus().length;
    for(var i = 0; i < numberOfCPUs; i++){
      var args = fnArgs.pop();
      runWorker(args);
    }
  }

  function runWorker(args){
    var worker = cluster.fork({
      args: args
    });

    worker.on('message', function(msg){
      total += +msg;
    });

    worker.on('exit', function(code, signal){
      if( fnArgs.length > 0 ){
        runWorker(fnArgs.pop());
      }else{
        console.log('total: ' + total);
      }
    });
  }

  module.exports.master = master;
})();