//alert("hello");

yourName = prompt("Enter your name: ");
console.log("Hello " + yourName + "! Welcome to the world of JavaScript!");

//objects
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person.name); // Accessing object property
console.log(person.age); // Accessing object property
console.log(person.city); // Accessing object property
person.greet(); // Calling object method

// Array of objects
let people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 35 }
];

console.log(people[0].name); // Accessing object property in array
console.log(people[1].age); // Accessing object property in array
console.log(people[2].name); // Accessing object property in array
console.log(people[0].age); // Accessing object property in array   

// Array of objects with methods
let peopleWithMethods = [
    {
        name: "John",
        age: 30,
        greet: function() {
            console.log("Hello, my name is " + this.name);
        }
    },
    {
        name: "Jane",
        age: 25,
        greet: function() {
            console.log("Hello, my name is " + this.name);
        }
    },
    {
        name: "Mike",
        age: 35,
        greet: function() {
            console.log("Hello, my name is " + this.name);
        }
    }
];

console.log(peopleWithMethods[0].name); // Accessing object property in array
console.log(peopleWithMethods[0].age); // Accessing object property in array
peopleWithMethods[0].greet(); // Calling object method in array

