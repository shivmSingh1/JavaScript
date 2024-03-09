//ques 1-

let a= "shivam";
a= "shivam" + 2;
console.log(a);  //concat both

//ques 2-

console.log(typeof a);

//ques 3-

//ques 4-
const student={
  name: "shivam singh",
  class: 12,
  
}
student["roll number"] = 12;

console.log(student); //new keys and and value of key is also changeable but value of object doesn't change.

student["name"]= "harry";
console.log(student);
