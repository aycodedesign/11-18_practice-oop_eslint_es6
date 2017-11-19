// function person(name, color) {
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

import MobileMenu from './modules/MobileMenu';

const mobileMenu = new MobileMenu();