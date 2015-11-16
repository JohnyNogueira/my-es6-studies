let theArray = [1, 3, 5, 7];

var normalMultiplication = theArray.map(function (a) {
    return a * a;
});
 
console.log('normal Multiplication result: ' + normalMultiplication.join(', '));
 
let newMultiplication = theArray.map(a => a * a);

console.log('');  
console.log('new Multiplication result: ' + newMultiplication); 
 
let newMultiplication2 = theArray.map(a => {
    let b = a * a;
    return b;
});

console.log(''); 
console.log('new Multiplication result: ' + newMultiplication);
 
let newReduceSum = theArray.reduce((x, y) => x + y);

console.log('');  
console.log('reduce sum: ' + newReduceSum);
 
let newReduceSum2 = theArray.reduce((x, y) => {
    let z = x + y;
    return z;
});

console.log('');  
console.log('reduce sum 2: ' + newReduceSum2);


let oddNumbers = theArray.filter(number => number % 2);

console.log('');
console.log('odd numbers ' + oddNumbers); 

console.log('');

theArray.forEach(v => {
  if (v % 5 === 0){
      console.log(v + ' % 5 === 0 !!!');
  }    
});

console.log('Enjoy :)');
