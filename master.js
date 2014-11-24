;(function(){
  'use strict';

  var formQueue = require('./formQueue');
  var countSolutions = require('./countSolutions');

  module.exports = function(){
    console.log('master module is beginning');

    formQueue.run(4, 1);
    console.log('just ran formQueue.run, here is the functionArguments queue: ' + formQueue.functionArguments);

    formQueue.functionArguments.forEach(function(args){
      console.log('one set of args: ' + args);
    });
  };
})();