//class 
class MyClass {
	 
	constructor () {
		this.Number = 2;
	}
	Multiply (num) {
		 return num * this.Number;
	}	 
}

class UseMyClass extends MyClass{
	constructor () {
		super();		 
		this.MyNumber = super.Multiply(2);
	}
	
}

var myInstance = new UseMyClass();
 
console.log(myInstance.MyNumber);