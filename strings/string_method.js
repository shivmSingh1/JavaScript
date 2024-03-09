console.log("string methods")

let name = "shivam singh";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2));
console.log(name.slice(2,8));

let name3= "harshita";
let name4= "singh";
let fullName= name.concat(name3);
console.log(fullName);

let name5= "    harshita     "
console.log(name5);
console.log(name5.trim());

console.log(name3.startsWith("h"));
console.log(name3.endsWith("a"));