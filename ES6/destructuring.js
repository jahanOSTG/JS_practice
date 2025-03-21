//array destructuring

var array=[10,20,30,40]
var [n1,n2,n3,n4]=array;
console.log(n1)

//swap variables

let a=50,b=70;
[a,b]=[b,a]
console.log(a)
console.log(b)

//object destructure

const myInfo=
    {
        name: "Faria Jahan Janie",
        id: 551,
        age:22,
        language:{
            native:"bangla",
            begineer: "english"
        }
    }

const {name,language}=myInfo
console.log(name);
console.log(language);
console.log(language.begineer);