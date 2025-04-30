// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

//for each loop
numbers.forEach(function(number) {
    console.log(number);
});

// Arrow function
let numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((number) => {
    console.log(number);
});

// Arrow function with parameters
let add = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15

// Arrow function with default parameters
let multiply = (a, b = 1) => a * b;
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10

// Arrow function with rest parameters
let sum = (...numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
};
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(1, 2)); // Output: 3
console.log(sum(1, 2, 3)); // Output: 6

// Arrow function with spread operator
let numbers3 = [1, 2, 3, 4, 5];
let max = Math.max(...numbers3);
console.log(max); // Output: 5