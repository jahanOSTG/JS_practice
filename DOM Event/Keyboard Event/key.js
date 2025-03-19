console.clear();

 const textarea=document.querySelector('textarea');
 //keyDown
textarea.addEventListener('keydown', function () {
    console.log('down');
});

//keyPress
textarea.addEventListener('keypress', function () {
    console.log('press');
});

//keyUp
textarea.addEventListener('keyup', function (e) {
    console.log(e.key);
});

textarea.addEventListener('keyup', function (e) {
    console.log(e.shiftKey);
});