class Player{
    constructor(associatedClass, scoreClass, winClass, number, wins) {
        this.diceList = [];
        this.score = 0;
        this.wins = wins;
        this.diceClass = associatedClass;
        this.scoreClass = scoreClass;
        this.winClass = winClass;
        this.number = number;
    }
}

let player1 = new Player(".p1RolledDice", ".p1Score", ".p1Wins", 1, 0);
let player2 = new Player(".p2RolledDice", ".p2Score", ".p2Wins", 2, 0);
let rounds = document.querySelector(".numRounds").value;
let roundsMAX = rounds;

// let p1List = [];
// let score1 = 0;
// let p2List = [];
// let score2 = 0;

let started = false


// to start the game
document.querySelector(".startButton").addEventListener('click', function() {
    rounds = document.querySelector(".numRounds").value;
    // Makes sure the number of rounds is odd
    if (isOdd(rounds) == false) { 
        document.querySelector(".oddReq").classList.remove("hidden");
    }
    else {
        document.getElementById("setup").classList.add("hidden");
        // document.querySelector(".startButton").classList.add("hidden");
        // document.querySelector(".numRounds").classList.add("hidden");
        document.getElementById("inGame").classList.remove("hidden");
        document.querySelector(".currentRound").textContent = `Current Round: ${roundsMAX - rounds + 1}`;

        // if(document.querySelector(".oddReq").classList.contains("hidden") == false) {
            document.querySelector(".oddReq").classList.add("hidden");
        // }
    }
})


// rolls the dice
document.querySelector(".rollButton").addEventListener('click', function() {
    score1 = rollDice(player1);
    score2 = rollDice(player2);

    // if there are no moure founds, stop letting people be able to roll and add a RESET button
    // if (rounds == 0) {
    //     console.log(rounds)
    //     document.querySelector(".rollButton").classList.add("hidden");
    //     document.querySelector(".clearScreen").classList.remove("hidden");
    //} else 
    if (player1.diceList.length == 3) {
        rounds -= 1;
        compareScore();
        document.querySelector(".rollButton").classList.add("hidden");
        document.querySelector(".restart").classList.remove("hidden");
        // anotherRound();
    }
    if(rounds == 0) {
        // document.querySelector(".restart").classList.add("hidden");
        document.querySelector(".clearScreen").classList.remove("hidden");
        document.querySelector(".restart").classList.add("hidden");
        document.querySelector(".WINNER").classList.remove("hidden");
        if(player1.wins > player2.wins){
            document.querySelector(".WINNER").textContent = "PLAYER 1 WINS";
        }
        else if (player1.wins < player2.wins){
            document.querySelector(".WINNER").textContent = "PLAYER 2 WINS";
        }
        else {
            document.querySelector(".WINNER").textContent = "NO WINNER!";
        }
    }
})

// Rolls the dice, and adds the text to the website
function rollDice(player) {
    let tempArray = [];
    for(let i = 3 - (player.diceList.length); i>0; i--){
        tempArray.push(Math.floor(Math.random() * 6 + 1));
    }

    player.diceList.push(Math.max.apply(null, tempArray));
    player.score += Math.max.apply(null, tempArray);
    document.querySelector(player.diceClass).textContent += ` ${tempArray} //`;
    document.querySelector(player.scoreClass).textContent = `Player ${player.number} score: ${player.score}`;
}

function compareScore() {
    if (player1.score > player2.score) {
        player1.wins += 1;
        document.querySelector(".result").textContent = "PLAYER 1 WINS!"
    } else if (player2.score > player1.score) {
        player2.wins += 1;
        document.querySelector(".result").textContent = "PLAYER 2 WINS!"
    } else {
        document.querySelector(".result").textContent = "TIE!"
    }
    document.querySelector(player1.winClass).textContent = `Player 1 Wins: ${player1.wins}`;
    document.querySelector(player2.winClass).textContent = `Player 2 Wins: ${player2.wins}`;
}

function isOdd(number) {
    if (number % 2 == 0 || number <= 0) {
        return false
    } else {
        return true
    }
}

function anotherRound() {
    // document.querySelector(player1.diceClass).textContent = ``;
    // player1.diceList = [];
    // document.querySelector(player1.scoreClass).textContent = ``;
    // player1.score = 0;

    // document.querySelector(player2.diceClass).textContent = ``;
    // player2.diceList = [];
    // document.querySelector(player2.scoreClass).textContent = ``;
    // player2.score = 0;

    document.querySelector(".rollButton").classList.remove("hidden");
}

document.querySelector(".clearScreen").addEventListener('click', function() {
    player1 = new Player(".p1RolledDice", ".p1Score", ".p1Wins", 1, 0);
    player2 = new Player(".p2RolledDice", ".p2Score", ".p2Wins", 2, 0);
    resetText(player1);
    resetText(player2);

    document.querySelector(".result").textContent = "";
    document.querySelector(".WINNER").classList.add("hidden");
    document.querySelector(".rollButton").classList.remove("hidden");

    document.querySelector(".clearScreen").classList.add("hidden");
    document.getElementById("inGame").classList.add("hidden");
    document.getElementById("setup").classList.remove("hidden");

})

document.querySelector(".restart").addEventListener('click', function() {
    // rounds--;
    if (rounds == 0){
        document.querySelector(".restart").classList.add("hidden");
        document.querySelector(".clearScreen").classList.remove("hidden");
        document.querySelector(".WINNER").classList.remove("hidden");
        if(player1.wins > player2.wins){
            document.querySelector(".WINNER").textContent = "PLAYER 1 WINS";
        }
        else if (player1.wins < player2.wins){
            document.querySelector(".WINNER").textContent = "PLAYER 2 WINS";
        }
        else {
            document.querySelector(".WINNER").textContent = "NO WINNER!";
        }
    }
    else {
        player1 = new Player(".p1RolledDice", ".p1Score", ".p1Wins", 1, player1.wins);
        player2 = new Player(".p2RolledDice", ".p2Score", ".p2Wins", 2, player2.wins);

        resetText(player1);
        resetText(player2);
        document.querySelector(".result").textContent = ""
        document.querySelector(".currentRound").textContent = `Current Round: ${roundsMAX - rounds + 1}`;


        document.querySelector(".rollButton").classList.remove("hidden");
        document.querySelector(".restart").classList.add("hidden")
    }
})

//Sets the "rolled dice" text back to defaults
function resetText(player){
    document.querySelector(player.diceClass).textContent = "";
    document.querySelector(player.scoreClass).textContent = `Player ${player.number} score: ${player.score}`;
}