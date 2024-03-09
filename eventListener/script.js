// let black = function(){
//     document.body.style.background="black"
// }
// let red= function(){
//     document.body.style.background="red"
// }

let google = function(){
    window.location = "https://google.com"
    window.focus();
}
let btn=document.getElementById("btn");
btn.addEventListener("click",google)

console.log(black);

// btn.addEventListener("click",red)

// btn.removeEventListener("click",x)

// document.body.style.background="red"