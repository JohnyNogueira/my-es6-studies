## Constants
Many languages have the concept of constants, you can not change the value of constant once it has been initialised, because it read-only.

####Examples
```JavaScript
 const MY_CONSTANT = "Foo";
 
console.log(MY_CONSTANT);
//foo

//fail
//MY_CONSTANT = "Bar";
//if you try change the value of MY_CONSTANT, the compilation is broken because this variable is read only

console.log(MY_CONSTANT);
//foo
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