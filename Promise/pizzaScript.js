//pizza->dough->cheese

function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let cheese= "🧀"
            resolve(cheese)
        },2000)
    })
}

function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           let dough="🍩"+cheese
        //    resolve(dough)
        reject("bad quality of cheese"+cheese)
        },2000)
    })
}

function makePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let pizza=dough+"🍕"
            resolve(pizza)
        },2000)
    })
}

getCheese().then((cheese)=>{
     console.log("your cheese is here",cheese);
    return makeDough(cheese)
})
.then((dough)=>{
    console.log("your dough is here",dough);
    return makePizza(dough)
}).then((pizza)=>{
    console.log("your pizza is here",pizza);
}).catch((data)=>{
    console.log(data);
})
.finally(()=>{
    console.log("process end");
})

as