;(function(){
  'use strict';
  var cluster = require('cluster');
  var countSolutionsArgs = require('./main.js').countSolutionsArgs;
  var countSolutions = require('./countSolutions').countSolutions;

  module.exports = function(){
    console.log('worker module is beginning:');
    countSolutionsArgs.forEach(function(args){
      var res = countSolutions.apply(null, args);
      console.log('res', res);
    });
  };
})();