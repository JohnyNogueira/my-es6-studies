
const MY_CONSTANT = "Foo";
 
console.log(MY_CONSTANT);
//foo


//fail
//MY_CONSTANT = "Bar";
//if you try change the value of MY_CONSTANT, the compilation is broken because this variable is read only

console.log(MY_CONSTANT);
//foo
 
let myVariable = MY_CONSTANT;