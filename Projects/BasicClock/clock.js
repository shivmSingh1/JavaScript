let clock= document.getElementById("clock");
function time(){
  let a = new Date()
  clock.innerHTML = a;
//   let h= a.getHours()
//   let m= a.getMinutes()
//   let s= a. getSeconds()
//   let d= a.getDate()
}
setInterval(time)
