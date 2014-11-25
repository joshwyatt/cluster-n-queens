;(function(){
  'use strict';
  var cluster = require('cluster');

  module.exports = function(){
    console.log('master module is beginning');

    cluster.fork();
  };
})();