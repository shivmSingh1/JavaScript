let p=fetch("http://api.weatherapi.com/v1/current.json?key=3e2fc1138d13474a8ee222921232110&q=London&aqi=yes");
let container= document.getElementById("container")
container.style.background="red";
let img=document.getElementById("img")

p.then((response)=>{
//   console.log(response)
  return response.json();
}).then(async(value)=>{
    console.log(value.location)
    container.innerHTML=container.innerHTML+value.location.name
    container.innerHTML= container.innerHTML + value.current.condition.text
})
img.querySelector("img").src = value.current.condition.icon ;



