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

