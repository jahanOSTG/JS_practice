//one dimentaional Array
//create a function called highestScore
//receive a 1D array  called score
//return the highest score

function highestScore(score) {
    var max = score[0];
    for (var x = 1; x < score.length; x++) {
        if (max < score[x]) {
            max = score[x];
        }
    }
    return max;
}

let score = [5, 34, 87, 1, 89];
var maxScore = highestScore(score);


document.write(maxScore);


