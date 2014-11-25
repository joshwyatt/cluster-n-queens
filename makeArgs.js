;(function(){
  'use strict';

  var makeFlags = require('./countSolutions.js').makeFlags;
  var makeAttackedSquareRows = require('./countSolutions.js').makeAttackedSquareRows;

  function makeArgs(n, rowToStartAt){

    rowToStartAt = rowToStartAt || 0;
    var nIsEven = n % 2 === 0;
    var halfOfN = Math.floor(n / 2);
    var check = (1 << n) - 1;
    var flags = makeFlags(n);
    var total = 0;
    var functionArguments = [];

    for(var i = 0; i < halfOfN; i++){

      var subRoutine = function(rowNumber, attackedSquareRows, flags){
        if( !rowToStartAt ){
          return;
        }
        var check = (1 << n) - 1;
        var row = 0;
        for(var i = 0; i < attackedSquareRows.length; i++){
          row |= attackedSquareRows[i][rowNumber];
        }
        for(var j = 0; j < n; j++){
          var flag = flags[j];
          if( !(flag & row) ){
            var moreAttackedSquareRows = makeAttackedSquareRows(flag, n, rowNumber, check);
            attackedSquareRows.push(moreAttackedSquareRows);
            if( rowNumber === rowToStartAt ){
              functionArguments.push([n, rowToStartAt + 1, attackedSquareRows, flags, check, j, rowToStartAt]);
            }else{
              subRoutine(rowNumber + 1, attackedSquareRows, flags);
            }
            attackedSquareRows.pop();
          }
        }
      };

      var attackedSquareRows = [];
      attackedSquareRows.push(makeAttackedSquareRows(flags[i], n, 0, check));

      subRoutine(1, attackedSquareRows, flags);
    }

    return functionArguments;
  };
  module.exports = makeArgs;

})();