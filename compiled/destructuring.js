'use strict';

//older

var myArray = ['red', 'blue', 'yellow'];

var color1 = myArray[0];
var color2 = myArray[1];
var color3 = myArray[2];

console.log(color1 + " and " + color2 + " and " + color3);

//now, with destructuring

var newArray = ['red', 'blue', 'yellow'];

var newColor1 = newArray[0];
var newColor2 = newArray[1];
var newColor3 = newArray[2];

console.log(newColor1 + " and " + newColor2 + " and " + newColor3);

//objects

var keyValue = { myKey: 'myValue' };

var newKeyValue = keyValue.myKey;

console.log(newKeyValue);
//myValue

var _hero1$hero = { hero1: "batman", hero2: "superman" };
var hero1 = _hero1$hero.hero1;
var hero2 = _hero1$hero.hero2;

console.log(hero1);
//batman

console.log(hero2);
//superman

var name1 = "whatEverName";
var _whatEverName = { whatEverName: "whatEverValue" };
var named = _whatEverName[name1];

console.log(named); // whatEverValue

var fruits = [{ name: "apple" }, { name: "orage" }, { name: "strawberry" }];

var fruitSalad = fruits.map(function (_ref) {
  var name = _ref.name;
  return name;
});

console.log(fruitSalad);

//[ 'apple', 'orage', 'strawberry' ]

function values() {
  return {
    firsValue: 1,
    secondValue: 2
  };
}

var obj = values();

console.log(obj.firsValue);
//1

console.log(obj.secondValue);
//2