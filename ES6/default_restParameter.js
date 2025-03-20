//default parameter
function message(text="How are you?"){
    console.log(`${text}`);
}
message();

//rest parameter
function numbers(x,y,...z){
    console.log(`x= ${x} , y=${y} , z=${z}`);
}

numbers(10,20,30,40);