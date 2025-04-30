let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

// String interpolation using template literals
let output = `name = ${person.name} and age = ${person.age}`;
console.log(output);

console.log("name = ", person.name, " and ", "age = ", person.age);


// Array of numbers
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// array of strings
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

//for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//for of loop
for (let number of numbers) {  
    console.log(number);
}

for (let fruit of fruits) {
    console.log(fruit);
}

//for in loop
for (let index in numbers) {  
    console.log(numbers[index]);
}

for (let index in fruits) {
    console.log(fruits[index]);
}

//while loop
let i = 0; 
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

//do while loop
let j = 0;
do {
    console.log(numbers[j]);
    j++;
}
while (j < numbers.length);


//push, pop, shift, unshift, concat, toString
let fruits2 = ["apple", "banana", "cherry", "date", "fig", "grape"];
console.log(fruits2);

fruits2.push("honeydew"); // Add to the end
console.log(fruits2);

fruits2.pop(); // Remove from the end
console.log(fruits2);

let fruits3 = ["kiwi", "mango", "orange", "papaya", "pear", "pineapple", "strawberry", "watermelon"];
let allFruits = fruits2.concat(fruits3, fruits); //concat
console.log(allFruits);

let val = fruits3.shift(); //shift (delete from start)
console.log(val);
console.log(fruits3);

fruits2.unshift("watermelon"); //unshift (add from start)
console.log(fruits2);

//slice
let newFruits = fruits3.slice(3, 5); //elements btw idx 3 to 5
console.log(newFruits);

//splice (used to add or remove elements)
let fruits4 = ["apple", "banana", "cherry", "date", "fig", "grape"];
console.log(fruits4);
let addedFruits = fruits4.splice(2, 0, "kiwi", "mango"); //add 2 elements at idx 2
console.log(addedFruits); //empty array as no elements were removed
console.log(fruits4);
//remove elements from idx 2 to 5
let removedFruits = fruits4.splice(2, 3); //remove 3 elements from idx 2
console.log(removedFruits); //["kiwi", "mango", "banana"]
console.log(fruits4); //["apple", "cherry", "date", "fig", "grape"]

//sort
let sortedFruits = fruits3.sort(); //sort the array in ascending order
console.log(sortedFruits);

//sort in descending order 
let sortedFruitsDesc = fruits3.sort((a, b) => b.localeCompare(a)); //sort the array in descending order
console.log(sortedFruitsDesc);

//reverse
let reversedFruits = fruits3.reverse(); //reverse the array
console.log(reversedFruits);
