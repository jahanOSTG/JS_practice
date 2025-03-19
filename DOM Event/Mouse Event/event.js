console.clear();
const div= document.querySelector("div");
console.log(div);

//click

div.addEventListener("click", function () {
    console.log("Click is occurred");
});

//double Click

div.addEventListener("dblclick", function () {
    console.log("Double Click is occurred");
});

//mouseUp event
div.addEventListener("mouseup", function () {
    console.log("mouseup occurred");
});

// mousedown event
div.addEventListener("mousedown", function () {
    console.log("mousedown occurred");
});

//mouseenter event
div.addEventListener("mouseenter", function () {
    console.log("mouseenter occurred");
});

// mouseleave event
div.addEventListener("mouseleave", function () {
    console.log("mouseleave occurred");
});

//mouseover event
div.addEventListener("mouseover", function () {
    console.log("mouseover occurred");
});

// mousemove event

div.addEventListener("mousemove", function (e) {
       //console.log("mousemove occurred");
    console.log("clientX=" + e.clientX, "clientY=" + e.clientY);
});