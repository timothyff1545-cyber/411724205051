// console.log("hi")
// const change = document.getElementById("i")
// change.innerHTML = "bharathraj thn da mass"
// function change(){
//     document.getElementById("id2").innerHTML= 
// }
const input = document.getElementById("in")
const output = document.getElementById("out")
input.addEventListener("input",()=>{
    output.innerHTML =input.value
})

const second = document.createElement("p")
second.innerHTML ="HI"
document.body.appendChild(second)
//second.remove()