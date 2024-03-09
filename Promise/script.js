// sycn

let ticket = new Promise((resolve,reject)=>{
    let isBoarded = true;
    if(isBoarded){
        resolve("You are in the flight")
    }else{
        reject("your flight has been cancelled")
    }
})

ticket.then((data)=>{
    console.log("whooo!"+data)
}).catch((data)=>{
    console.log("oh no!"+data)
}).finally(()=>{
    console.log("im always executed")
})