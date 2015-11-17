## Arrows Functions =>
Arrows are a function shorthand using the `=>` syntax.  This feature is similar to the related feature in C#, Java 8 and CoffeeScript.  When you just need a simple function with one argument, the new arrow function syntax is simply Identifier`=>` Expression

####Examples
```JavaScript
let theArray = [1, 3, 5, 7];

var normalMultiplication = theArray.map(function (a) {
    return a * a;
});
 
console.log('normal Multiplication result: ' + normalMultiplication.join(', '));
//the result is 1, 9, 25, 49
 
let newMultiplication = theArray.map(a => a * a);

console.log('');  
console.log('new Multiplication result: ' + newMultiplication); 

//the result is 1,9,25,49
 
let newMultiplication2 = theArray.map(a => {
    let b = a * a;
    return b;
});

console.log(''); 
console.log('new Multiplication result: ' + newMultiplication);
//the result is 1,9,25,49
 
let newReduceSum = theArray.reduce((x, y) => x + y);

console.log('');  
console.log('reduce sum: ' + newReduceSum);

//the result is 16
 
let newReduceSum2 = theArray.reduce((x, y) => {
    let z = x + y;
    return z;
});

console.log('');  
console.log('reduce sum 2: ' + newReduceSum2);
//the result is 16


let oddNumbers = theArray.filter(number => number % 2);

console.log('');
console.log('odd numbers ' + oddNumbers); 

//the result is 1,3,5,7

console.log('');

theArray.forEach(v => {
  if (v % 5 === 0){
      console.log(v + ' % 5 === 0 !!!');
  }    
});

//the result is 5 % 5 === 0 !!!

console.log('Enjoy :)');

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
4. View in `compiled` folder the samples compiled to ES5 
