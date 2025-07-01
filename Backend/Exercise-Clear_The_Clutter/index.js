// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';

const basePath = "C:\\Users\\HP\\OneDrive\\Desktop\\Padhai\\Web_Dev-Programs\\Backend\\Exercise-Clear_The_Clutter";

let files = await fs.readdir(basePath);

for (const item of files) {
    console.log("runing for ", item);
    let ext = item.split(".")[item.split(".").length - 1]
    console.log("ext is ", ext);

    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basePath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
    }
}