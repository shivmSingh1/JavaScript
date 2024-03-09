console.log("scope of var let and const")
var a=45;
var a=30;
var a=20; //allow re-declaration and change orignal value
console.log(a);

{
  var a=10; // var have globle scope
  console.log(a);
  a=90;
}
console.log(a);

console.log("let rules")
let b=20;
// let b=10; does't allow re-declaration if already declared
console.log(b);

{
  let b=50;  //it have block scope
  console.log(b);
  b=100;
}

console.log(b);

console.log("const rule")
const c = "shivam";
console.log(c);
// c="singh";
// console.log(c);  can,t change bcz c value become constant 