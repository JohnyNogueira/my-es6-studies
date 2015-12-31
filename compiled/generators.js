'use strict';

var _marked = [oneToFive, pokemon].map(regeneratorRuntime.mark);

function oneToFive() {
  return regeneratorRuntime.wrap(function oneToFive$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return 1;

      case 2:
        _context.next = 4;
        return 2;

      case 4:
        _context.next = 6;
        return 3;

      case 6:
        _context.next = 8;
        return 4;

      case 8:
        _context.next = 10;
        return 5;

      case 10:
      case 'end':
        return _context.stop();
    }
  }, _marked[0], this);
}

var yld = oneToFive();

console.log(yld.next().value);
//1
console.log(yld.next().value);
//2
console.log(yld.next().value);
//3
console.log(yld.next().value);
//4
console.log(yld.next().value);
//5

var request = require('request-promise');
var it;

var getData = function getData(url) {
  return request(url).then(function (response) {
    return it.next(response);
  });
};

function pokemon() {
  var description;
  return regeneratorRuntime.wrap(function pokemon$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.t0 = JSON;
        _context2.next = 3;
        return getData('http://pokeapi.co/api/v1/pokemon/1');

      case 3:
        _context2.t1 = _context2.sent;

        _context2.t2 = function (item) {
          return item.id;
        };

        description = _context2.t0.parse.call(_context2.t0, _context2.t1).result.map(_context2.t2);

        console.log(description);

      case 7:
      case 'end':
        return _context2.stop();
    }
  }, _marked[1], this);
}

it = pokemon();
it.next();