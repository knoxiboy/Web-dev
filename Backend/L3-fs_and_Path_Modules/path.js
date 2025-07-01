import path from "path"

let myPath = "C:/Users/karan/Desktop/Web_Dev-Programs/Backend/L3/Karan.txt"

console.log(path.parse(myPath)) // gives an object with properties like root, dir, base, ext, name

console.log(path.isAbsolute(myPath)) // checks if the path is absolute or relative

console.log(path.extname(myPath)) // returns the extension of the file

console.log(path.dirname(myPath)) // returns the directory name of the path

console.log(path.basename(myPath)) // returns the base name of the file

console.log(path.join("C:/Users/karan/Desktop", "Web_Dev-Programs", "Backend", "L3", "Karan.txt")) // joins the path segments

console.log(path.resolve("C:/Users/karan/Desktop", "Web_Dev-Programs", "Backend", "L3", "Karan.txt")) // resolves the path to an absolute path