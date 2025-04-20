let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

// String interpolation using template literals
let output = `name = ${person.name} and age = ${person.age}`;
console.log(output);

console.log("name = ", person.name, " and ", "age = ", person.age);
