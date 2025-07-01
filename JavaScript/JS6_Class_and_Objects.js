// Below is a class named Person
// It has a constructor that initializes name and age properties
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person("John", 30); // Creating an instance of Person
let person2 = new Person("Jane", 25);

// Accessing properties of the person instances
console.log(person1.name); // Output: John
console.log(person1["age"]);  // Output: 30
console.log(person2.age);  // Output: 25

//changing properties of the person instances
person1.age = 31; // Changing the age of person1
person2["name"] = "Janet"; // Changing the name of person2

// Adding a method to the Person class
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Calling the greet method on person1 and person2
person1.greet(); // Output: Hello, my name is John and I am 31 years old.
person2.greet(); // Output: Hello, my name is Janet and I am 25 years old.


// Inheritance
// Creating a subclass of Person called Employee
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Call the parent class constructor
        this.position = position; // New property for Employee
    }

    // Overriding the greet method
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.position}.`);
    }
}

let employee1 = new Employee("Alice", 28, "Software Engineer");
let employee2 = new Employee("Bob", 35, "Project Manager");

// Calling the greet method on employee1 and employee2
employee1.greet(); // Output: Hello, my name is Alice, I am 28 years old and I work as a Software Engineer.
employee2.greet(); // Output: Hello, my name is Bob, I am 35 years old and I work as a Project Manager.


// Demonstrating static methods in a class
class MathUtils {
    // Static method to calculate the square of a number
    static square(num) {
        return num * num;
    }

    // Static method to calculate the cube of a number
    static cube(num) {
        return num * num * num;
    }
}

// Using the static methods
console.log(MathUtils.square(5)); // Output: 25
console.log(MathUtils.cube(3));   // Output: 27


// Encapsulation and getters/setters
// Demonstrating getters and setters in a class
class Circle {
    constructor(radius) {
        this._radius = radius; // Using underscore to indicate a private property
    }

    // Getter for radius
    get radius() {
        return this._radius;
    }

    // Setter for radius
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.log("Radius must be a positive number.");
        }
    }

    // Method to calculate area
    area() {
        return Math.PI * this._radius * this._radius;
    }
}

let circle = new Circle(5);

// Accessing the radius using the getter
console.log(circle.radius); // Output: 5

// Setting a new radius using the setter
circle.radius = 10;

// Accessing the updated radius
console.log(circle.radius); // Output: 10

// Calculating the area of the circle
console.log(circle.area()); // Output: 314.1592653589793


// Encapsulation example
class BankAccount {
    constructor(accountNumber, balance) {
        this._accountNumber = accountNumber; // Private property
        this._balance = balance; // Private property
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this._balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this._balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    // Method to get the current balance
    getBalance() {
        return this._balance;
    }
}

let account = new BankAccount("123456789", 1000);
// Depositing money into the account
account.deposit(500); // Output: Deposited: $500. New balance: $1500

// Withdrawing money from the account
account.withdraw(200); // Output: Withdrew: $200. New balance: $1300

// Getting the current balance
console.log(`Current balance: $${account.getBalance()}`); // Output: Current balance: $1300

// Attempting to withdraw more than the balance
account.withdraw(1500); // Output: Invalid withdrawal amount.



// polymorphism example
class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

class Cat extends Animal {
    speak() {
        console.log("The cat meows.");
    }
}

function makeAnimalSpeak(animal) {
    animal.speak(); // Calls the speak method of the specific animal type
}

let dog = new Dog();
let cat = new Cat();

makeAnimalSpeak(dog); // Output: The dog barks.
makeAnimalSpeak(cat); // Output: The cat meows.



// Abstract class example
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class Shape.");
        }
    }

    area() {
        throw new Error("Method 'area()' must be implemented.");
    }
}  

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height; // Implementing the area method
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius; // Implementing the area method
    }
}

let rectangle = new Rectangle(5, 10);
let circle = new Circle(7);
console.log(`Rectangle area: ${rectangle.area()}`); // Output: Rectangle area: 50
console.log(`Circle area: ${circle.area()}`); // Output: Circle area: 153.93804002589985



// Demonstrating the use of 'this' keyword in different contexts
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        console.log(`Count: ${this.count}`);
    }

    // Using 'this' in a callback function
    delayedIncrement() {
        setTimeout(function() {
            this.increment(); // 'this' will not refer to the Counter instance here
        }, 1000);
    }
}