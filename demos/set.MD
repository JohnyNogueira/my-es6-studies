## Set
Set is as collection of values, is in an ordered list of values that cannot contain duplicates. 

####Examples
```JavaScript
var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
var foo = { a : 3, b : 4 };
mySet.add(foo);
mySet.add(1); //ignored

console.log("size of mySet: " + mySet.size);
//4

console.log("mySet has 1 ? " + mySet.has(1));
//true

mySet.delete(1);

console.log("mySet has 1 ? " + mySet.has(1));
//false

console.log("mySet has 4 ? " + mySet.has(4));
//false


console.log("for itens of mySet: ");

for (let item of mySet){
	console.log(item);
} 
//2
//3
//{ a : 3, b : 4 }

console.log("forEach itens of mySet: ");
mySet.forEach(item => { 
      console.log(item); 
});
//2
//3
//{ a : 3, b : 4 }

```

##ES6 to ES5

1. Download this repository:

  ```
  git clone https://github.com/JohnyNogueira/my-es6-studies.git
  ```

2. Install required npm packages:

  ```
npm install
  ```

3. Run gulp

  ```
 gulp run
  ```
4. Use node to execute the scripts
  ```
 node class.js
  ```