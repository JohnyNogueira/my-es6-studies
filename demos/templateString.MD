## Template String
Template String is simple to use enclosed by backquotes (``) and \${ expression} like a handlebars.
The ${expression} include empressions and method calls.

####Examples
```JavaScript
  
var world = "world";

console.log(`hello ${world}!`); 
//hello world
 
let foo = 1;
let bar = 'string y';

let text = `multiple lines break:
value of foo = ${foo}
and value of bar = "${bar}".`;

console.log(text); 
//breaking lines and template string

console.log( `Simple sum of 7 + 1 is ${ 7 + 1 }` );
// Simple sum of 7 + 1 is 8

let s1 = 2;
let s2 = 3;

console.log( `2 * 3 is ${ s1 * s2}` );
//2 * 3 is 6
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