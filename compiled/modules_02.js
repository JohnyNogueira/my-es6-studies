'use strict';

var _modules_ = require('./modules_01');

var _modules_2 = _interopRequireDefault(_modules_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _modules_.factorial)(5)); // 25

console.log((0, _modules_.sum)(6, 2)); // 8

console.log((0, _modules_.sum)(_modules_2.default, 3)); // 80