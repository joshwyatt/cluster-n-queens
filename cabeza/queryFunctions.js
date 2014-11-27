;(function(){
  module.exports = {
    cpus: launchWorkers,
    results: sendResults
  };

  function launchWorkers(cpus){
    return cpus;
  }
  function sendResults(){}
})();