console.log("Welcome")

//creating a promise= pending,resolving,rejecting
const promise1= new Promise((resolve,reject)=>{
    let completePromise=false;
    if(completePromise){
        resolve("Completed Promise1");

    }else{
        reject("Is not completed")
    }
})
// Resolve promise
promise1
.then((res)=>{
    console.log(res)

})
// Reject promise
promise1
.catch((err)=>{
    console.log(err)
})
console.log(promise1)