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
document.getElementById("result").innerText = choice1; 

}

else if(randInt === 1) {
    console.log("The random integer is 1.")
    document.getElementById("result").innerText = choice2; 
}

else {
    console.log("The random integer is 2.")
  document.getElementById("result").innerText = choice3; 
}

}


function checkWin() { 
    let userChoice = document.getElementById("user-output").innerText; 
    let compChoice = document.getElementById("result").innerText; 

    
    // if user choice and computer choice is the same, then it's a tie. 
    // rock beats scissors, paper beats rock, and scissor beats paper. 
    if(userChoice === choice1 && compChoice == choice1 || userChoice === choice2 && compChoice === choice2 || userChoice === choice3 && compChoice === choice3) {
        document.getElementById("winner").innerText = "It's a tie."; 
    } 

    //user selects rock, and computer selects paper
    else if(userChoice === choice1 && compChoice === choice2 ) {
        document.getElementById("winner").innerText = "The computer won!!! "; 
    }

    // user selects paper, computer selects rock
    else if(userChoice === choice2 && compChoice === choice1 ) {
        document.getElementById("winner").innerText = "The user won!!! "; }

    // user selects rock, computer selects scissors
    else if(userChoice === choice1 && compChoice === choice3) {
        document.getElementById("winner").innerText = "The user won!!!"
    }


    // user selects scissors, computer selects rock. 
    else if(userChoice === choice3 && compChoice === choice1)
        document.getElementById("winner").innerText = "The computer won!!! "; 
    
  
    // user selects scissors, computer selects paper
    else if(userChoice === choice3 && compChoice === choice2) {
    document.getElementById("winner").innerText = "The user won!!!";
    }

    // user selects paper, computer selects scissor
    else if (userChoice === choice2 && compChoice === choice3) {
    document.getElementById("winner").innerText = "The computer won!!!";
    }

}


// Event listeners allow something to happen when a button is clicked. 
// In this case, if a user clicks rock, then I want the button to 

 

  document.getElementById("rock-button").addEventListener("click", function outputRock() {
   let userChoice = document.getElementById("user-output").innerText = choice1; 
   generateRandomChoice(); 
   checkWin(); 
  }); 

  document.getElementById("paper-button").addEventListener("click", function outputPaper() {
    let userChoice = document.getElementById("user-output").innerText = choice2; 
    generateRandomChoice(); 
    checkWin(); 
  })

  document.getElementById("scissor-button").addEventListener("click", function outputScissor() {
    let userChoice = document.getElementById("user-output").innerText = choice3; 
    generateRandomChoice(); 
    checkWin(); 
  })
 




