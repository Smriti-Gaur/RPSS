let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const genComputerchoice = () =>{
    const option = ["rock","paper","scissor"]
    const ranIdx= Math.floor(Math.random()*3);
    return option(ranIdx);
}

const drawGame =(userchoice) => {
    console.log("game was drawn.");

}
const showWinner=(userWin)=>{
    if (userWin){
        console.log("you win!");
    }else{
        console.log("you lose");
    }
}

const playGame = (userchoice)=>{
    console.log("User choice is =",userchoice);
    // Generate computer choice

    const compChoice = genComputerchoice()
    console.log("Computer's choice is =",compChoice);
}

if (userchoice === compChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice==="rock"){
       userWin =  compChoice === "paper" ? false:true;
    }else if (userchoice==="paper"){
        userWin = compChoice==="scissors"?false:true
    }else{
       userWin =  compChoice==="rock"?false : true;
    }
    showWinner(userWin)

}

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);

    })
})