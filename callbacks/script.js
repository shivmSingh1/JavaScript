// let name = function (name,callback){
//     console.log("hi"+" "+name)
//     callback(name);
// }

// name("shivam",function(){
//     console.log("hey i'm callback")
// })

//pizza->dough->cheese

let getCheese= function(callback){
    
    setTimeout(() => {
        let cheese = "🧀"
        console.log("here is cheese", cheese);
        callback(cheese)
    }, 2000);
}

let getDough= function(cheese,callback){
    setTimeout(() => {
        let dough= "🍩"
        console.log("here is dough",dough);
        callback(dough)
    }, 2000);
}

let getPizza = function(dough,callback){
    setTimeout(function(){
        let pizza="🍕"
        console.log("here is your pizza",pizza);
        callback(pizza)
    })
}
 
getCheese(function(cheese){
    getDough(cheese,function(dough){
     getPizza(dough,function(pizza){
        console.log("got pizza",pizza);
     })
    }) 
})