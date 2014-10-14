// ======================================================
// Exercises I completed while working through Eloquent Javascript, v2
// Book: http://eloquentjavascript.net/
// ======================================================


// Utility functions
function logHeader(title) {
  console.log("\n\n=====================\n" +
                title + "\n" +
              "=====================\n")
}


// Chapter 4:  THE SUM OF A RANGE

function range(start, end, step) {
  myArray = [];
  step = step || 1;
  if (step > 0)
  	for (var i=start; i<=end; i=i+step) myArray.push(i);
  else if (step < 0)
    for (var i=start; i>=end; i=i+step) myArray.push(i);
  else {
    console.log("Must use a non-zero step");
	return false;
  }
  return myArray;
}

function sum(arr) {
  var sum=0;
  arr.forEach(function(el) {
	sum += el;
  });
  return sum;
}

logHeader("Building an array based on a range and summing it")
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(5, -9, -3));
// → [5, 2, -1, -4, -7]
console.log(range(5, 22, 1.5));
// → [5, 6.5, 8, 9.5, 11, 12.5, 14, 15.5, 17, 18.5, 20, 21.5]


// Chapter 4:  REVERSING AN ARRAY

function reverseArray(arr) {
  var arr2 = []
  for (var i=0; i < arr.length; i++)
	arr2.unshift(arr[i]);
  return arr2;
}

function reverseArrayInPlace(arr) {
  for (var i=0; i < Math.floor(arr.length/2); i++) {
  	var temp = arr[i]
    arr[i] = arr[arr.length-(1+i)];
    arr[arr.length-(1+i)] = temp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// Chapter 4:  A LIST
// NEEDS WORK

function arrayToList(array, i) {
  var list = {};
  var i = i || 0;
  if (i < array.length) {
    list["value"] = array[i];
    list["rest"] = arrayToList(array, i+1);
    return list;
  }
  else
    return null;
}

function listToArray(list) {
  var array = [];
  array.push(list.value);
  if (list.rest)
    listToArray(list.rest, array)
  return array;
}

function prepend(value, list) {
  return list;
}

function nth(list, position) {
  return item;
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
