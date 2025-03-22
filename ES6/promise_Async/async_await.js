
//promise chaining
const taskOne=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task1 is completed")

    })
}

const taskTwo=()=>{
    return new Promise((resolve,reject)=>{
     
        setTimeout(() => { resolve("Task2 is  completed"); }, 2000);

    })
}

const taskThree=()=>{
    return new Promise((resolve,reject)=>{
        reject("Task3 is  not completed")

    })
}

// taskOne()
//     .then((res)=> console.log(res))
//     .then(taskTwo)
//     .then((res)=>console.log(res))
//     .then(taskThree)
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))

const callAllTask = async () => {
    try {
        const t1 = await taskOne();
        console.log(t1);

        const t2 = await taskTwo();
        console.log(t2);

        const t3 = await taskThree(); // This will throw an error
        console.log(t3);
    } catch (e) {
        console.log("Error:", e); // Now it will catch the rejection from taskThree()
    }
};

callAllTask();
