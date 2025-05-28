//button events
let btn2 = document.querySelector("#btn2");

btn2.onclick = (e)=> {
    alert("Button 2 clicked!");
    console.log("Button 2 clicked!");
    console.log("Event target:", e.target);
    console.log("Event type:", e.type);
    console.log(e.clientX, e.clientY);
}

//mouse events
let div = document.querySelector("#innerDiv");

div.addEventListener("mouseover", (e) => {
    alert("Div hovered!");
    console.log("Div hovered!");
    console.log("Event target:", e.target);
    console.log("Event type:", e.type);
    console.log(e.clientX, e.clientY);
});

div.addEventListener("mouseout", (e) => {
    alert("Mouse left the div!");
    console.log("Mouse left the div!");
    console.log("Event target:", e.target);
    console.log("Event type:", e.type);
    console.log(e.clientX, e.clientY);
});
