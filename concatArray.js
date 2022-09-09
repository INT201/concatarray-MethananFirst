const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  if((array1 === null || array1 === undefined) && (array2 === null || array2 === undefined)){
    return undefined; 
  } else if (array1 === undefined || array1 === null) {
    return array2;
  } else if (array2 === undefined || array2 === null) {
    return array1;
  } else if ((array1.length == 0) && (array2.length == 0)) {
    return [] ;
  } else {
    // return array1.concat(array2);
    return [].concat(array1,array2);
  } 
}
module.exports = concatArray
