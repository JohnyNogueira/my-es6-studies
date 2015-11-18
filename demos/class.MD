## Class
JavaScript classes are introduced in ECMAScript 6 and provide a much simpler and clearer syntax to create objects and deal with inheritance.

####Examples
```JavaScript
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
//the result is 4

```
```JavaScript

//Bicycle
class Bicycle {
	
	constructor (speed, cadence){
		this.speed = speed;
		this.cadence = cadence;
	}
	
	SetCadence (newCadence){
		this.cadence = newCadence;
	}
	
	SpeedUp (){
		this.speed++;
	}
	
	ApplyBrake (){
		this.speed--;
	}	
	
}

class MountainBike extends Bicycle {
	
	constructor(speed, cadence, height){		
		super(speed, cadence);		
		this.heigth = height;
		
		super.SpeedUp(); //speed 11
		
		super.SpeedUp(); //speed 12
		
		super.ApplyBrake(); //speed 11
		
		super.SetCadence(5); //cadence 5
	}	
	 
}
 
var myInstance2 = new MountainBike(10, 2, 5);

console.log(myInstance2);

//now MountainBike have { speed: 11, cadence: 5, heigth: 5}

Enjoy :)


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
