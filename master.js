;(function(){
  'use strict';

  var countSolutionsArgs = require('./main.js').countSolutionsArgs;
  console.log('in master at point 1: ' + countSolutionsArgs);

  module.exports = function(n, row){
    console.log('master module is beginning');

  };
})();