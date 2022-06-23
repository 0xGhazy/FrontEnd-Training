/* A simple blackjack game in javascript. */

// Taking player name
let playerName = prompt("Enter Your Name: ");

let cards = [];
let sum = 0;
let message = "";
// Flag variable to indecate if the game is winable.
let winable = false;
// Flag variable to check if the player has blackJack cards.  -> sum = 21;
let hasBlackJack = false;
// Creating player object
let player = {
    name: playerName,
    chips: 200
}

// DOM elements
let bannerMessage = document.getElementById("banner-message");
let sumElement = document.getElementById("sum-el");
let cardsElement = document.getElementById("cards-el");
let playerElement = document.getElementById("player-el");
const startgame = document.getElementById("start-game");
const getNewCard = document.getElementById("new-card");
// set player name on screen
playerElement.textContent = player.name + ": $" + player.chips;


function getRandomCard() {
    /* Function that return a random card number with the game rules.

    RETURN:
        randomNumber (int): random int number between (1, 13).
    */
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}


startgame.addEventListener("click", function () {
    /* Function to start the game by taking randome 2 cards and calculate the sum.

    RETURN:
        NONE
    */
    // set winable to true
    winable = true
    // getting first two cards
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // update cards array with player's cards.
    cards = [firstCard, secondCard]
    // calculate the sum of two cards
    sum = firstCard + secondCard
    // render the game screen.
    renderGame()
});


function renderGame() {
    /* 

    RETURN:
        NONE
    */

    // add cards to cards element.
    cardsElement.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsElement.textContent += cards[i] + " "
    }
    
    // calculate the sum of cards.
    sumElement.textContent = "Sum: " + sum

    // check the sum and pick the banner message.
    if (sum <= 20) {
        message = "[🃏] Wanna new card? 😀";
    } else if (sum === 21) {
        message = "[🃏] Congratulations you have BlackJack 🎉❤";
        hasBlackJack = true
        player.chips += 100;
    } else {
        message = "[🃏] You are out of game 😥";
        winable = false
        player.chips -= 50;
    }
    // set the banner message.
    bannerMessage.textContent = message
    if (player.chips <= 0){
        playerElement.textContent = "خلي عندك دم وبطل لعب 😡";
    } else{
        playerElement.textContent = player.name + ": $" + player.chips;
    }
}
    


getNewCard.addEventListener("click", function (){
    /* Function to get a new random card.
    
    RETURN:
        NONE
    */
    // check that is steal winable and the player has no blackjack
    if (winable === true && hasBlackJack === false) {
        // the new random card
        let card = getRandomCard()
        // update the sum
        sum += card
        // add the new card to cards array
        cards.push(card)
        // render the game again.
        renderGame()        
    }
});


/* TODO:
    [x] Getting numbers randomly.
    [ ] Fixing game freezing after blackjack.
*/
