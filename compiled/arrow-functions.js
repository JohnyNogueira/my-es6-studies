'use strict';

var theArray = [1, 3, 5, 7];

var normalMultiplication = theArray.map(function (a) {
  return a * a;
});

console.log('normal Multiplication result: ' + normalMultiplication.join(', '));

var newMultiplication = theArray.map(function (a) {
  return a * a;
});

console.log('');
console.log('new Multiplication result: ' + newMultiplication);

var newMultiplication2 = theArray.map(function (a) {
  var b = a * a;
  return b;
});

console.log('');
console.log('new Multiplication result: ' + newMultiplication);

var newReduceSum = theArray.reduce(function (x, y) {
  return x + y;
});

console.log('');
console.log('reduce sum: ' + newReduceSum);

var newReduceSum2 = theArray.reduce(function (x, y) {
  var z = x + y;
  return z;
});

console.log('');
console.log('reduce sum 2: ' + newReduceSum2);

var oddNumbers = theArray.filter(function (number) {
  return number % 2;
});

console.log('');
console.log('odd numbers ' + oddNumbers);

console.log('');

theArray.forEach(function (v) {
  if (v % 5 === 0) {
    console.log(v + ' % 5 === 0 !!!');
  }
});

console.log('Enjoy :)');