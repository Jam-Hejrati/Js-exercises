"use strict";

//Selecting elements
const player_0_El = document.querySelector(".player--0");
const player_1_El = document.querySelector(".player--1");
const score_0_El = document.querySelector("#score--0");
const score_1_El = document.querySelector("#score--1");
const current_0_El = document.querySelector("#current--0");
const current_1_El = document.querySelector("#current--1");
const dice_El = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

//Starting conditions
let scores, currentScore, activePlayer, playing;

const init = () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score_0_El.textContent = 0;
    score_1_El.textContent = 0;
    current_0_El.textContent = 0;
    current_1_El.textContent = 0;
    dice_El.classList.add("hidden");
    player_0_El.classList.remove("player--winner");
    player_1_El.classList.remove("player--winner");
    player_0_El.classList.add("player--active");
    player_1_El.classList.remove("player--active");
};
init();

const switchPlayer = () => {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player_0_El.classList.toggle("player--active");
    player_1_El.classList.toggle("player--active");
};

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
    if (playing) {
        // 1.Generating a random dice roll
        const dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display dice
        dice_El.classList.remove("hidden");
        dice_El.src = `./dice-${dice}.png`;

        // 3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            //Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            //Switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener("click", function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        // 2. Check if player's score >= 100 ~~> Finish the game
        if (scores[activePlayer] >= 100) {
            playing = false;
            dice_El.classList.add("hidden");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove("player--active");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--winner");
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener("click", init);