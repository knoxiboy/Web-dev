import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js"; // Import the Todo model

let con = await mongoose.connect("mongodb://localhost:27017/todo") // Connect to MongoDB
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const todo = new Todo({ // Create a new todo item
    title: "Learn Node.js",
    desc: "Learn Node.js with Express and MongoDB",
    isDone: false
  });
  todo.save() // Save the todo to the database
    .then(() => console.log('Todo saved')) // Log success message
    .catch(err => console.error('Error saving todo:', err)); // Log any errors that occur during save
  console.log('Todo:', todo); // Log the todo object
  res.send('Hello World!')
})

app.get('/a', async (req, res) => { 
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, desc: todo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
