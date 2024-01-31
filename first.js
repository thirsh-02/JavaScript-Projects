let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const us = document.querySelector("#user-score");
const cs = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const genCompChoice=()=>{
    let options=["rock","paper","scissors"]
    let rdchoice = Math.floor(Math.random()*3); 
    // 3-->for getting whole number range 0-2
    return options[rdchoice];
}
const drawGame = () =>{
    console.log("Its a draw match");
}
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        console.log("You won the Game!");
        userScore++;
        us.innerText = userScore;
        msg.innerText = `You won 🤗! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
        console.log(userScore,compScore);

    }
    else{
        console.log("You lose the Game!");
        compScore++;
        cs.innerText = compScore;
        msg.innerText = `You lose 🫠! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
        console.log(userScore,compScore);
    }
}

const playGame = (userChoice)=>{
       console.log("user choice = ",userChoice);
       //generate computer choice
       const compChoice = genCompChoice();
       console.log("Computer Choice = ",compChoice);
       
       //conditons
      
       if(userChoice === compChoice){
        //Draw Game
        drawGame();
        msg.innerText="Its a Draw 😇!"
        msg.style.backgroundColor="yellow";
        msg.style.color="white";
        console.log(userScore,compScore);
       }
       else{
         let userWin = true;
         if(userChoice === "rock"){
            //paper,scissors
            userWin = compChoice === "paper"? false:true;
         }
         else if(userChoice == "paper"){
            //rock,scissors
            userWin = compChoice === "rock"?true:false;
         }
         else if(userChoice == "scissors"){
            //rock,paper
            userWin = compChoice === "rock"?false:true;
         }
       showWinner(userWin,userChoice,compChoice);
}
}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

