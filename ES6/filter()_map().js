// map() function
let number=[2,6,7,9]
let squareNumbers=number.map(function(x){
    return x*x
})
console.log(squareNumbers)
console.log(number)

//filter() function
let numbers=[2,60,76,97]
let selectedNumber=numbers.filter(function(x){
    return 10<x
})
console.log(selectedNumber)
