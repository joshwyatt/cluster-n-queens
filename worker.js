;(function(){
  'use strict';
  var cluster = require('cluster');

  function worker(){
    var args = process.env.args;
    process.send(args);
    cluster.worker.kill();
  }

  module.exports.worker = worker;

})();