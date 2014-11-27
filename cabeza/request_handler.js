;(function(){
  'use strict';
  //core modules
  var url = require('url');
  //file modules
  var queryFunctions = require('./queryFunctions.js');

  module.exports = function(req, res){
    if( req.method === 'GET' ){
      var queryParams = url.parse(req.url).query.split('=');
      var fn = queryParams[0];
      var args = queryParams[1];
      var result = queryFunctions[fn](args);
      res.end('you sent a get request and result is: ' + result);
    }else{
      res.end('this was not a GET request');
    }
  };
})();