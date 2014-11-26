;(function(){
  'use strict';
  //core modules
  var cluster = require('cluster');

  function master(){
    //THESE `args` ARE FOR DEVELOPMENT PURPOSES AND SHOULD BE REPLACED WITH AN ACUTAL QUEUE OF FUNCTION ARGS
    //TO BE DISTRIBUTED AMONGST MANY PROCESSES
    var fnArgs = [['another', 'bat'], ['beautiful', 'cat'], ['crisis', 'dat'], ['designed', 'ex']];
    console.log('master module is beginning');
    var numberOfCPUs = require('os').cpus().length;
    for(var i = 0; i < numberOfCPUs; i++){
      var args = fnArgs[i];
      cluster.fork({
        args: args
      });
    }
  }

  module.exports.master = master;
})();