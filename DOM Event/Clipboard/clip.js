console.clear();

const text= document.querySelector('input');

//copy
text.addEventListener('copy',function(){
    console.log("coppied successfully")
})
//cut
text.addEventListener('cut',function(){
    console.log("cut successfully")
})
//paste
text.addEventListener('paste',function(){
    console.log("paste successfully")
})
