//Gussing game
//guess a number from 1 to 5
//generate a random number between 1 to 5
//If the number matches random number, you will win or lost
//continue it 5 times
//show the result
console.clear();

var numOfLost=0;
var numOfWon=0;

for(var i=1; i<6; i++){

    var guessNumber= parseInt(prompt("Enter a number between 1 to 5: "));

    var randomnumber=Math.floor(Math.random()*5) +1;

    if (guessNumber==randomnumber){

        console.log("You have Won");

        numOfWon = numOfWon+1;


    }
    else{
        console.log("You have lost. The random number was:" +randomnumber);

        numOfLost=numOfLost+1;
    }
}
document.write("You have Won : "+numOfWon +"times <br> And You have Lost :"+ numOfLost+ "times.")
