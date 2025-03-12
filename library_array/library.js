//shift, unshift, splice,sort

var names=["Janie","Antor","Faria","Akash"];

//unshift opposite of push
names.unshift("Mina");
document.write(names);


//shift opposite of pop
names.shift();
document.write("<br>"+names);

//splice adding elements
names.splice(1,0,"Nusrat","Maria");
document.write("<br>"+names);

//splice removing elements
names.splice(2,4)
document.write("<br>"+names);

//sorting numbers
var digits = [5, 23, 56, 3, 11, 45, 2, 1, 6];
digits.sort(function(a, b) {
    return a - b;  // Sorts numerically in ascending order
});
document.write("<br>" + digits);

//reverse sorting numbers
var digits = [5, 23, 56, 3, 11, 45, 2, 1, 6];
digits.sort(function(a, b) {
    return  b-a;  // Sorts numerically in ascending order
});
document.write("<br>" + digits);

