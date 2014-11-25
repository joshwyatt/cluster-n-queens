;(function(){
  'use strict';
  var cluster = require('cluster');
  var countSolutionsArgs = require('./main.js').countSolutionsArgs;

  module.exports = function(){
    console.log('worker module is beginning:');
    countSolutionsArgs.forEach(function(args){
      console.log(args);
    });

  };
})();