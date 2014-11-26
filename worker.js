;(function(){
  'use strict';
  var cluster = require('cluster');

  function worker(){
    console.log('worker is starting');
    var args = process.env.args.split(',');
    var res = tester.apply(null, args);
    console.log(res);
  }

  function tester(a, b){
    return 'a is "' + a + '" and b is "' + b + '"';
  }

  module.exports.worker = worker;

})();