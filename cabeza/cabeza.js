;(function(){
  'use strict';
  //core modules
  var http = require('http');
  //command line args
  var port = process.argv[2];

  http.createServer(requestHandler).listen(port, function(){
    console.log('listening on ' + port);
  });

  function requestHandler(req, res){
    if( req.method === 'GET' ){
      res.end('you sent a get request');
    }else{
      res.end('this was not a GET request');
    }
  }
  
})();