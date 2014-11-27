//core modules
var http = require('http');
var os = require('os');
//command line args
var cabezaIP = process.argv[2];
//construct url
var numberOfCPUs = os.cpus().length;
var queryString = '?cpus=' + numberOfCPUs;
var cabezaURL = [cabezaIP, queryString].join('');

http.get(cabezaURL, function(res){
  res.on('data', function(data){
    console.log('inside finger here is the response from cabeza: ' + data);
  });
});

//calculate number of cpus
//send number of cpus as a request to cabezaAddress
//on response from cabeza, run that shit on all the cpus
  //return result to cabez