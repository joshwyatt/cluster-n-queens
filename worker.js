;(function(){
  'use strict';
  var cluster = require('cluster');

  function worker(){
    console.log('worker is starting');
    var args = process.env.args;
    process.send(args);
    cluster.worker.kill();
  }

  function tester(a, b){
    return 'a is "' + a + '" and b is "' + b + '"';
  }

  module.exports.worker = worker;

})();