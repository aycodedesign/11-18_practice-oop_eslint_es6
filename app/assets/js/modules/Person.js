// function Person(fullName, color) {
//   this.name = fullName;
//   this.favColor = color;
//   this.greet = function () {
//     console.log(`Yo ${this.name} has a favorite color of ${this.favColor}`);
//   };
// }

// module.exports = Person;

class Person {
    constructor(fullName, color) {
        this.name = fullName;
        this.favColor = color;
    }

    greet() {
        console.log(`Ay! My name is ${this.name} and my favorite color is ${this.favColor}.`);
    }
}

export default Person;
