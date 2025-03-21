//find(callback,value)return the first element that pass certain condition
let numbers=[55,53,21,6,78,43]
let myNumber=numbers.find(x=> x%2===0)
console.log(myNumber)


//finIndex(callback,value)return the first elements index that pass certain condition
let myNumberIndex=numbers.findIndex(x=> x%2==0)
console.log(`Index number : ${myNumberIndex}`)

//objects

var students=[
    {
      name: "Faria Jahan Janie",
      id: 551,
      age:22
    },
    {
      name: "Richmond Antor",
      id: 557,
      age:23
    },
    {
      name: "Rabeya Khatun",
      id: 550,
      age:20
    }
]

console.log(students.find(x=> x.age>20))

