"use strict";

var numbers = [1, 3, 0, 5, 7, 0];

function zeroEnd(array) {
  var arr = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      arr.push(array[i]);
    } else {
      arr.unshift(array[i]);
    }
  }

  return arr.toString();
}

console.log(zeroEnd(numbers));