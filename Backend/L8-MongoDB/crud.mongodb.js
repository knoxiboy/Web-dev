// Create a new database named "CrudDb"
// If the database already exists, this command will not create a new one
use("CrudDb")

// Create a new collection named "courses"
// If the collection already exists, this command will not create a new one
db.createCollection("courses")

// Insert a single document into the "courses" collection
db.courses.insertOne({
    name: "Harrys web dev free course",
    price: 0,
    assignments: 12,
    projects: 45
})

// Insert multiple documents into the "courses" collection
db.courses.insertMany([
    {
      "name": "Python Masterclass",
      "price": 0,
      "assignments": 10,
      "projects": 30
    },
    {
      "name": "JavaScript Basics",
      "price": 0,
      "assignments": 8,
      "projects": 20
    },
    {
      "name": "C# for Beginners",
      "price": 0,
      "assignments": 15,
      "projects": 40
    },
    {
      "name": "Web Development Fundamentals",
      "price": 0,
      "assignments": 12,
      "projects": 35
    },
    {
      "name": "Java Programming Essentials",
      "price": 0,
      "assignments": 14,
      "projects": 38
    },
    {
      "name": "ReactJS Crash Course",
      "price": 0,
      "assignments": 10,
      "projects": 25
    },
    {
      "name": "SQL Simplified",
      "price": 0,
      "assignments": 12,
      "projects": 30
    },
    {
      "name": "Responsive Web Design",
      "price": 0,
      "assignments": 10,
      "projects": 28
    },
    {
      "name": "Node.js for Beginners",
      "price": 0,
      "assignments": 13,
      "projects": 36
    },
    {
      "name": "Frontend Development with Vue.js",
      "price": 0,
      "assignments": 11,
      "projects": 32
    }
])
// this will create new document every time you run the script
// If you want to avoid duplicates, you can use a unique field or check for existing documents


// read 
let a = db.courses.find({price: 0})
console.log(a.toArray())
console.log(a.count())

let b = db.courses.findOne({name: "Harrys web dev free course"})
console.log(b)

// update
db.courses.updateOne(
    { name: "Harrys web dev free course" },
    { $set: { price: 100 } }
)

db.courses.updateMany(
    { price: 0 },
    { $set: { price: 50 } }
)

// delete
db.courses.deleteOne({ name: "Harrys web dev free course" })
db.courses.deleteMany({ assignments: 10 })

// https://www.mongodb.com/docs/manual/reference/operator/query/