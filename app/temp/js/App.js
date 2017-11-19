/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MobileMenu = __webpack_require__(1);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobileMenu = new _MobileMenu2.default(); // function person(name, color) {
// //     console.log('Hello, my name is ' + name + ' and my favorite color is ' + color + '.')
// // }
// console.log(`Hello, my name is ${name} and my favorite color is ${color}.`)
// }


// const john = {
//     name: 'John Doe',
//     FavColor: 'red',
//     greet: function (name, FavColor) {
//         console.log(`Hello, my name is ${this.name} and my favorite color is ${this.FavColor}.`)
//  } //added 'this' so the variables 'name' and 'FavColor' know to use the properties in 'this' object
// }

// const jane = {
//     name: 'Jane Doe',
//     FavColor: 'blue',
//     greet: function (name, FavColor) {
//         console.log(`Hello, my name is ${this.name} and my favorite color is ${this.FavColor}.`)
//     }
// }

// john.greet();
// jane.greet();


// const johnName = 'John Doe';
// const johnFavColor = 'blue';

// const janeName = 'Jane Doe';
// const janeFavColor = 'red';

// person(janeName, janeFavColor);
// person(johnName, johnFavColor);


// import $ from 'jquery';
// import Person from './modules/Person';

// class Adult extends Person {     
//   payTaxes() {
//     console.log(`${this.name} now owes $0 in taxes`);
//   }
// }
// const john = new Adult('John Doe', 'red');
// john.greet();
// john.payTaxes();

// const jane = new Person('Jane Doe', 'blue');
// jane.greet();

// $('h1').remove();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobileMenu = function MobileMenu() {
  _classCallCheck(this, MobileMenu);

  console.log('testing mobile menu');
};

exports.default = MobileMenu;

/***/ })
/******/ ]);