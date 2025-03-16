//creating HTML element
var heading2=document.createElement("h1");
var text=document.createTextNode("This is my first project");
heading2.appendChild(text);

var new_div=document.getElementById("div");
new_div.appendChild(heading2);

//deteting HTML element

var heading=document.getElementsByTagName("h2")[0];
div.removeChild(heading);