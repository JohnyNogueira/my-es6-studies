## Map
Map Object is a key/value data structure in ES6. It provides to use hash-maps, collections, use itetables and more.

####Examples
```JavaScript
var map = new Map()
map.set('name', 'johny')
map.set('age', '24')
map.set('born', '1991') 
console.log([...map])
//[['name', 'johny'], ['age', '24'], ['born', '1991']]


console.log(map.has("name"));
//true

console.log(map.get("name"));
//johny

console.log(map.size);
//3

for (let [key, value] of map) {
    console.log(key, value);
}



let fooMap = new Map();
let emptyObj = {};  
fooMap.set(emptyObj, "johny");

console.log(fooMap.get(simpleObj)); 
//johny

console.log(fooMap.has(simpleObj)); 
//true


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