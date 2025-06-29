let choice1 = "Rock"; 
let choice2 = "Paper"; 
let choice3 = "Scissor"; 

function generateRandomChoice() {
// Returns a random integer from 0 to 2:
let randInt = Math.floor(Math.random() * 3); 



//when you use the DOM method getElementsByClassName
// a list of html elements with the className of result is going to be returned. 
// so you need to define which element's inner text you want to change. 

if(randInt === 0) {
console.log("The random integer is 0. ")
document.getElementById("result").value = choice1; 

}

else if(randInt === 1) {
    console.log("The random integer is 1.")
    document.getElementById("result").value = choice2; 
}

else {
    console.log("The random integer is 2.")
  document.getElementById("result").value = choice3; 
}

}


// Event listeners allow something to happen when a button is clicked. 
// In this case, if a user clicks rock, then I want the button to 

function getUserChoice() {
 

  document.getElementById("rock-button").addEventListener("click", function outputRock() {
   let userChoice = document.getElementById("user-output").value = choice1; 
  }); 

  document.getElementById("paper-button").addEventListener("click", function outputPaper() {
    let userChoice = document.getElementById("user-output").value = choice2; 
  })

  document.getElementByID("scissor-button").addEventListener("click", function outputScissor() {
    let userChoice = document.getElementById("user-output").value = choice3; 
  })
 
}




function checkWin() {
    if(userChoice === choice1 && compChoice == choice1) {
        
    }
}