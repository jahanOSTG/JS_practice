//print the sum of array elements
var num = new Array();

for (var i = 0; i < 5; i++) {
    num[i] = parseInt(prompt("Enter the value of Array: "));
}

// Initialize sum to 0
var sum = 0;
for (var i = 0; i < 5; i++) {
     sum = sum + num[i];
}

document.write("Sum of array elements: " + sum);
