
function numbers(arr){

var count = 0;

for (var i=0; i<arr.length;i++){

  if(arr[i]>0){

count += arr[i];
  }
}

return count;
}

console.log(numbers([1, 2, 0, -1, -2, 3, 4]));



