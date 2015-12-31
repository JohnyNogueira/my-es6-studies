'use strict';

function* oneToFive() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

var yld = oneToFive();

console.log(yld.next().value);
//1
console.log(yld.next().value);
//2
console.log(yld.next().value);
//3
console.log(yld.next().value);
//4
console.log(yld.next().value);
//5


let request = require('request-promise'); 
 

function* pokemon() {
  var description = JSON.parse(
     yield request('http://pokeapi.co/api/v1/pokemon/1/').then(response => it.next(response))
  ) 

  console.log(description);
}

 
var res = pokemon();
 