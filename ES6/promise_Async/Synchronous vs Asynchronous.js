//synchronous programming
const taskOne=()=>{
    console.log("Task1");
}

const dataLoading=()=>{
    console.log("Task2. Data is loading")
}

const taskTwo=()=>{
    setTimeout(dataLoading,2000)  //asynchronous
}
const taskThree=()=>{
    console.log("Task3");
}
const taskFour=()=>{
    console.log("Task4");
}
const taskFive=()=>{
    console.log("Task5");
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();