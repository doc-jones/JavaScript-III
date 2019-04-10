/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding. When "this" is in the global scope it references the Window or Global Object.
* 2. Implicit binding. When the function is invoked, the obj name, i.e., left of the dot is the reference for "this".
* 3. Explicit binding Using the methods call, apply (for arrays) or bind, the "this" reference can be specified.
* 4. new keyword The new keyword creates an instance of a constructor and adds a "this" object to the constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function Person(name){
    this.name = name;
}
console.log(this);

// Principle 2

// code example for Implicit Binding

const sythLord = {
    firstName: 'Darth',
    lastName: 'Vader',
    fullName: function() {
        return `${firstName} + " " + ${lastName}`
    }
}

console.log(sythLord.fullName);



// Principle 3

// code example for New Binding

function Person(name, age){
    this.name = name;
    this.age = age;
}

const darthvader = new Person('darthvader', 100);
const lukeskywalker = new Person('lukeskywalker', 18);

console.log(darthvader.age);

// Principle 4

// code example for Explicit Binding

const spoiler = function() {
    console.log("Luke, I am your " + this.relation);
};

const vader = {
    relation: "father",
    survival: "no"
};

spoiler.call(vader);