// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/employee'); // Import the Employee model

con = mongoose.connect('mongodb://localhost:27017/company');
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
});

app.get('/generate', async (req, res) => {
  // Clear the collection Employee
  await Employee.deleteMany({})

  // Generate dummy data and save to MongoDB
  for(let i = 0; i < 10; i++) {
    const employee = new Employee({
      name: `Employee ${i + 1}`,
      salary: Math.floor(Math.random() * 100000) + 30000, // Random salary between 30,000 and 130,000
      laguage: ['JavaScript', 'Python', 'Java', 'C++'][Math.floor(Math.random() * 4)],
      city: ['New York', 'Los Angeles', 'Chicago', 'Houston'][Math.floor(Math.random() * 4)],
      isManager: Math.random() < 0.5 // Randomly true or false
    });
    await employee.save();
  }
  
  res.render('index', {foo: 'FOO'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})