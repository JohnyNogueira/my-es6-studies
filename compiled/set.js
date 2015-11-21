"use strict";

var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
var foo = { a: 3, b: 4 };
mySet.add(foo);
mySet.add(1);

console.log("size of mySet: " + mySet.size);

console.log("mySet has 1 ? " + mySet.has(1));

mySet.delete(1);

console.log("mySet has 1 ? " + mySet.has(1));

console.log("mySet has 4 ? " + mySet.has(4));

console.log("for itens of mySet: ");

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = mySet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    console.log(item);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log("forEach itens of mySet: ");
mySet.forEach(function (item) {
  console.log(item);
});