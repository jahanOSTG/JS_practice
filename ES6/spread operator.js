//spread operator in array
let array1=[1,2,3];
let array2=[4,5,6];
let number=[...array1,...array2];
console.log(number);

//spread operator in object
let info1={
    name: "Faria Jahan Janie",
    age:22
}
let info2={
    nationality: "Bangladeshi",
}
let info={...info1,...info2};
console.log(info);