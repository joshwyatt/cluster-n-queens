;(function(){
  'use strict';
  var cluster = require('cluster');

  module.exports = function(n, row){
    console.log('master module is beginning');

    var countSolutionsArgs = require('./main.js').countSolutionsArgs;
    console.log('in master...args.length: ' + countSolutionsArgs.length);
    cluster.fork();

  };
})();