;(function(){
  'use strict';
  var cluster = require('cluster');

  //THESE `args` ARE FOR DEVELOPMENT PURPOSES AND SHOULD BE REPLACED WITH AN ACUTAL QUEUE OF FUNCTION ARGS
  //TO BE DISTRIBUTED AMONGST MANY PROCESSES
  var args = [['another', 'bat'], ['beautiful', 'cat'], ['crisis', 'dat'], ['designed', 'ex']];

  function worker(){
    console.log('worker is starting');
  };

  module.exports = worker;

})();