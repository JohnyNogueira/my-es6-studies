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