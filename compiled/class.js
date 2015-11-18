"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//class

var MyClass = (function () {
	function MyClass() {
		_classCallCheck(this, MyClass);

		this.Number = 2;
	}

	_createClass(MyClass, [{
		key: "Multiply",
		value: function Multiply(num) {
			return num * this.Number;
		}
	}]);

	return MyClass;
})();

var UseMyClass = (function (_MyClass) {
	_inherits(UseMyClass, _MyClass);

	function UseMyClass() {
		_classCallCheck(this, UseMyClass);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UseMyClass).call(this));

		_this.MyNumber = _get(Object.getPrototypeOf(UseMyClass.prototype), "Multiply", _this).call(_this, 2);
		return _this;
	}

	return UseMyClass;
})(MyClass);

var myInstance = new UseMyClass();

console.log(myInstance.MyNumber);
//the result is 4

//Bicycle

var Bicycle = (function () {
	function Bicycle(speed, cadence) {
		_classCallCheck(this, Bicycle);

		this.speed = speed;
		this.cadence = cadence;
	}

	_createClass(Bicycle, [{
		key: "SetCadence",
		value: function SetCadence(newCadence) {
			this.cadence = newCadence;
		}
	}, {
		key: "SpeedUp",
		value: function SpeedUp() {
			this.speed++;
		}
	}, {
		key: "ApplyBrake",
		value: function ApplyBrake() {
			this.speed--;
		}
	}]);

	return Bicycle;
})();

var MountainBike = (function (_Bicycle) {
	_inherits(MountainBike, _Bicycle);

	function MountainBike(speed, cadence, height) {
		_classCallCheck(this, MountainBike);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(MountainBike).call(this, speed, cadence));

		_this2.heigth = height;

		_get(Object.getPrototypeOf(MountainBike.prototype), "SpeedUp", _this2).call(_this2); //speed 11

		_get(Object.getPrototypeOf(MountainBike.prototype), "SpeedUp", _this2).call(_this2); //speed 12

		_get(Object.getPrototypeOf(MountainBike.prototype), "ApplyBrake", _this2).call(_this2); //speed 11

		_get(Object.getPrototypeOf(MountainBike.prototype), "SetCadence", _this2).call(_this2, 5); //cadence 5
		return _this2;
	}

	return MountainBike;
})(Bicycle);

var myInstance2 = new MountainBike(10, 2, 5);

console.log(myInstance2);

//now MountainBike have { speed: 11, cadence: 5, heigth: 5}