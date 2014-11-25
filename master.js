;(function(){
  'use strict';

  var countSolutionsArgs = require('./main.js').countSolutionsArgs;

  module.exports = function(n, row){
    console.log('master module is beginning');

    console.log('in master: ' + countSolutionsArgs);
  };
})();