let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock, Paper, scissors
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("You Lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    // console.log("Comp choice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            user = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});