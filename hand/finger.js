//core modules
var http = require('http');
var os = require('os');
var request = require('request');

//command line args
var cabezaLocation = process.argv[2];

//calculate number of cpus
//send number of cpus as a request to capezaAddress