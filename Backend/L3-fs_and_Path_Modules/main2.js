import fs from "fs/promises"

let a = await fs.readFile("Karan.txt")

let b = await fs.appendFile("Karan.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)