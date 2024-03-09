
// named function
function printHello(){
  console.log("Hello");
}


//named function with parameter
function sumfun(x,y){
   let sum= x+y;
  return sum;
}


//arrow function
const avgfun= (x,y) =>{
  let avg = (x+y)/2;
  return avg;
}

const subfun= (x,y) =>{
  let sub = x-y;
  return sub;
}

//anonymous function 
let sayHello = function(){
  console.log("hello shivam");
}

sayHello();
printHello();
console.log(sumfun(4,5));
console.log(avgfun(5,5));
console.log(subfun(15,5)); 