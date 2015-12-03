'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var map = new Map();
map.set('name', 'johny');
map.set('age', '24');
map.set('born', '1991');
console.log([].concat(_toConsumableArray(map)));
//[['name', 'johny'], ['age', '24'], ['born', '1991']]

console.log(map.has("name"));
//true

console.log(map.get("name"));
//johny

console.log(map.size);
//3