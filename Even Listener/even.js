document.querySelector("button").addEventListener("click",myNew);
function myNew(){
    alert("Welcome");

    //anonymous function
    //document.querySelector("button").addEventListener("click",functin(){
    //alert("Welcome")
    //  });
}

var heading1=document.querySelector("h1");
heading1.addEventListener("mouseover",function(){
    heading1.classList.add("myStyle");

});

var heading1=document.querySelector("h1");
heading1.addEventListener("mouseout",function(){
    heading1.classList.remove("myStyle");

});