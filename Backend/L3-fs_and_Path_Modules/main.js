const fs = require("fs");

// console.log("starting the program...");

// fs.writeFileSync("Karan.txt", "Hello karan, how are you?", ()=>{
//   console.log("Writing to file...");
// });  // Callback function is optional here, as writeFileSync is synchronous

// console.log("File written successfully!");

// Reading a file synchronously
// const data = fs.readFileSync("Karan.txt");
// console.log("File content:", data.toString());

//writing in a file asynchronously
fs.writeFile("Karan2.txt", "Hello Karan, how are you?", (err) => {
    console.log("File written successfully!");
    fs.readFile("Karan2.txt", (err, data) => { // Asynchronous read
        if (err) {
            console.error("Error reading file:", err);
        } else {
            console.log("File content:", data.toString());
        }
    }) // callback function to handle the read operation
})


// Appending to a file asynchronously
fs.appendFile("Karan2.txt", "\nI am fine, thank you!", (err) => {
    if (err) {
        console.error("Error appending to file:", err);
    } else {
        console.log("File appended successfully!");
    }
});

// Deleting a file asynchronously
fs.unlink("Karan2.txt", (err) => {
    if (err) {
        console.error("Error deleting file:", err);
    } else {
        console.log("File deleted successfully!");
    }
});