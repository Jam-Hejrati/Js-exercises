"use strict";

const body = document.querySelector("body");
const againBtn = document.querySelector(".again");
const number = document.querySelector(".number");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreView = document.querySelector(".score");
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (content) => {
    message.textContent = content;
};

const styleHandler = (bgColor, numberWidth) => {
    body.style.backgroundColor = bgColor;
    number.style.width = numberWidth;
};

check.addEventListener("click", function () {
    const guessInput = Number(document.querySelector(".guess").value);

    if (!guessInput) {
        displayMessage("No Number Entered!");
    } else if (guessInput > 20 || guessInput < 0) {
        displayMessage("Guess between 1-20");
    } else if (guessInput === randomNumber) {
        number.textContent = randomNumber;
        displayMessage("Correct Number");
        styleHandler("#60b347", "30rem");
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if (guessInput !== randomNumber) {
        if (score > 1) {
            displayMessage(
                guessInput > randomNumber ? "Too High!" : "Too Low!"
            );
            score--;
            scoreView.textContent = score;
        } else {
            displayMessage("You Lost the game!");
            scoreView.textContent = 0;
        }
    }
});

againBtn.addEventListener("click", function () {
    score = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    scoreView.textContent = score;
    displayMessage("Start guessing...");
    number.textContent = "?";
    styleHandler("#222", "15rem");
    document.querySelector(".guess").value = "";
});
