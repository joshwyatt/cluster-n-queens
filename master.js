;(function(){
  'use strict';
  var cluster = require('cluster');

  module.exports = function(){
    console.log('master module is beginning');

    var countSolutionsArgs = require('./main.js').countSolutionsArgs;
    cluster.fork();
  };
})();