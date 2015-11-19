## Modules
JavaScript Modules works like CommonJS and AMD, 
your use is very simple by their declarative syntax to `import` and `export` modules.

####Examples
```JavaScript
//this is my file modules_01.js

export function factorial(x) {
  return x * x;
}
  
export function sum(x, y) {
  return x + y;
}
    
const X = 77;    

export { X as default };
```

```JavaScript
//this is my file modules_02.js
import { factorial, sum } from './modules_01';

console.log(factorial(5)); // 25

console.log(sum(6, 2)); // 8


import { default as myVariable } from './modules_01'

console.log(sum(myVariable, 3)); // 80

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