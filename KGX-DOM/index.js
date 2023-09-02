// dom methods

const body = document.body

const div = document.createElement("div")

const student = document.createElement("h1")

const age = document.createElement("h1")

student.innerHTML = "<strong>Elon MUSK</strong>"
    

age.innerHTML = "<strong>22</strong>"


const text = document.getElementById("text")

text.style.backgroundColor = "red"

text.classList.add("bg")
text.classList.add("tc")

const span = document.getElementById("span")

// span.classList.remove("bg")
span.dataset.somthing = "somthing"




// text.removeAttribute("id")

// text.setAttribute("title","Name")

div.append(student,age)
// body.append(div)
body.append("Hello world")

body.appendChild(div)

console.log(div)

















// DOM traversing 

// const body = document.body;

// const grandParent = document.getElementById("grandparent")

// const div = Array.from(document.getElementsByTagName('div'))

// const parent = Array.from(document.getElementsByClassName("parent"))

// const grandParent = document.querySelectorAll("#grandparent")

// const parent = document.querySelectorAll(".parent")

// const parents= Array.from(grandParent.children)

// for(let i = 0;i < parent.length;i++){
//     console.log(parent[i].children)
// }

// for(let i of parents){
//     console.log(i.closest(".child1"))
// }


//next sibling 

// const current = document.querySelector(".parent")

// console.log(current.nextElementSibling)

// changeBackground()

// const child = Array.from(document.getElementsByClassName("child"))

// for(let i of child){
//     console.log(i.closest(".grandparent"))
// }

// console.log(child)

// console.log(grandParent.closest("parent"))




// console.log(grandParent.children[0].children)
// console.log(grandParent.childNodes)

// console.log(grandParent)
// child.forEach(changeBackground)

// div.forEach(changeBackground)

// console.log(grandParent)

// changeBackground(grandParent)

function changeBackground(element){
    element.style.backgroundColor = "black"

}