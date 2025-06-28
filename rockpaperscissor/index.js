let choice1 = "Rock"; 
let choice2 = "Paper"; 
let choice3 = "Scissor"; 

function generateRandomChoice() {
// Returns a random integer from 0 to 2:
let randInt = Math.floor(Math.random() * 3); 

let elements =  document.getElementsByClassName("result")

//when you use the DOM method getElementsByClassName
// a list of html elements with the className of result is going to be returned. 
// so you need to define of which element's inner text you want to change. 



if(randInt === 0) {
console.log("The random integer is 0. ")
for(let i = 0; i < elements.length; i++) {
 elements[i].innerText = choice1; 
}

}

else if(randInt === 1) {
    console.log("The random integer is 1.")
    for(let i = 0; i < elements.length; i++) {
    elements[i].innerText = choice2; 
}
}

else {
    console.log("The random integer is 2.")
   for(let i = 0; i < elements.length; i++) {
    elements[i].innerText = choice3; 
}
}

}

