//core modules
var http = require('http');
var os = require('os');
var request = require('request');

//command line args
var cabezaLocation = process.argv[2];

var numberOfCPUs = os.cpus().length;

//calculate number of cpus
//send number of cpus as a request to cabezaAddress
//on response from cabeza, run that shit on all the cpus
  //return result to cabeza