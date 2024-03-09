//pizza->dough->cheese

let getCheese = function(){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              let cheese="🧀"
              resolve(cheese)
        },2000)
     })
}

let getDough = function(cheese){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
             let dough=cheese+"🍩"
            //  resolve(dough)
            reject("bad quality of cheese",cheese)
       },2000)
    })
}

let getPizza = function(dough){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
             let pizza=dough+"🍕"
             resolve(pizza)
       },2000)
    })
}

async  function orderPizza(){
try{
    const cheese= await getCheese();
    console.log("your chesse is here",cheese)

    const dough= await getDough(cheese);
    console.log("your dough is here", dough)

    const pizza= await getPizza(dough);
    console.log("your pizza is here",pizza)
}catch(err){
    console.log(err)
}

}

orderPizza();

