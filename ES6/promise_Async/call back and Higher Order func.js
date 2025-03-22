//call back and higher order function
function square(x){
    console.log(`Square of ${x} : ${x*x}`)

}

square(5);

function higherOrderFunction(number,callback){
    callback(number)

}
higherOrderFunction(6,square)