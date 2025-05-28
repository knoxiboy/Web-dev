console.log(window);
console.dir(window);

console.dir(document);

console.dir(document.body); // to access body of the html tag
console.log(document.body);

console.dir(document.head); // .... head ....
console.log(document.head);

console.log(document.title); // to access title of the html tag

document.title = "New Title"; // to change the title of the html tag
console.log(document.title); // to access title of the html tag

document.body.style.backgroundColor = "red"; // to change the background color of the body tag

document.body.style.color = "white"; // to change the color of the body tag

//to access different elements of the html tag
console.log(document.getElementById("header")); // to access the header tag
console.log(document.getElementsByClassName("header")); // to access the header tag

let paragraphs = document.getElementsByTagName("p"); // to access all the p tags
console.log(paragraphs);
console.log(paragraphs[0]); // to access the first p tag

let firstChild = document.body.firstChild; // to access the first child of the body tag
console.log(firstChild);


//querySelector

let p1 = document.querySelector("p"); // to access the first p tag
console.log(p1);

let allP = document.querySelectorAll("p"); // to access all the p tags
console.log(allP);

let header = document.querySelector("#heading"); // to access the header tag
console.log(header);

let header2 = document.querySelector(".heading"); // to access the header tag
console.log(header2);

let div = document.querySelector("div"); // to access the first div tag
console.log(div);

//hw problems
let ele = document.querySelector("#hello"); // to access the required element
ele.innerText = ele.innerText + " from apna clg"; // to change the text of the element