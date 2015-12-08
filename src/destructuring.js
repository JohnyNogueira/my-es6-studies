//older

var myArray = ['red', 'blue', 'yellow'];

var color1 = myArray[0];
var color2 = myArray[1];
var color3 = myArray[2];

console.log(color1 + " and " + color2 + " and " + color3);

//now, with destructuring

let newArray = ['red', 'blue', 'yellow'];

let [newColor1, newColor2, newColor3] = newArray;

console.log(newColor1 + " and " + newColor2 + " and " + newColor3);


//objects

let keyValue = { myKey : 'myValue' };

let { myKey : newKeyValue } = keyValue;

console.log(newKeyValue);
//myValue



var { hero1, hero2 } = { hero1: "batman", hero2: "superman" };

console.log(hero1);
//batman

console.log(hero2);
//superman


let name1 = "whatEverName";
let { [name1]: named } = { whatEverName: "whatEverValue" };

console.log(named); // whatEverValue
 
 
var fruits = [ { name: "apple" } , { name: "orage" } , { name: "strawberry" } ];

var fruitSalad = fruits.map( ( { name } ) => name );

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