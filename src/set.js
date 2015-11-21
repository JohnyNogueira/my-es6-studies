var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
var foo = { a : 3, b : 4 };
mySet.add(foo);
mySet.add(1);

console.log("size of mySet: " + mySet.size);

console.log("mySet has 1 ? " + mySet.has(1));

mySet.delete(1);

console.log("mySet has 1 ? " + mySet.has(1));

console.log("mySet has 4 ? " + mySet.has(4));


console.log("for itens of mySet: ");

for (let item of mySet){
	console.log(item);
} 

console.log("forEach itens of mySet: ");
mySet.forEach(item => { 
      console.log(item); 
});
