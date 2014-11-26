;(function(){
  'use strict';
  //core modules
  var cluster = require('cluster');

  module.exports = function(){
    console.log('master module is beginning');

    cluster.fork();
  };
})();