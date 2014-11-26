;(function(){
  'use strict';
  //core modules
  var cluster = require('cluster');

  function master(){
    var total = 0;

    //just a cheezy way to get a bunch of fn arguments
    var fnArgs = [];
    for(var j = 0; j < 100; j++){
      fnArgs.push(j);
    }

    console.log('master module is beginning');

    var numberOfCPUs = require('os').cpus().length;
    for(var i = 0; i < numberOfCPUs; i++){
      var args = fnArgs[i];
      var worker = cluster.fork({
        args: args
      });

      worker.on('message', function(msg){
        total += +msg;
        console.log('inside master and here is the new total after msg - ' + msg + ': ' + total);
      });

      worker.on('exit', function(code, signal){
        console.log('in exit. code: ' + code + ' signal: ' + signal);
      });
    }
  }

  module.exports.master = master;
})();