let marks ={
  aksah: 56,
  subh: 87,
  shiv:98,
  rohit:9
}

/* for(let i=0; i< Object.keys(marks).length ; i++){
  console.log("marks of "+ Object.keys(marks)[i] +" are "+ marks[Object.keys(marks)[i]] );
} */

for(let keys in marks){
  console.log("marks of "+ keys +" are "+ marks[keys]);
}