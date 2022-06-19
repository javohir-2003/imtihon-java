function countTrue(array){
  var count = 0;
  for(var i=0; i<array.length; i++){
    if(array[i] == true){
      count++
    }
  }
  return count;
}

console.log(countTrue([false, true, false, true, false]));