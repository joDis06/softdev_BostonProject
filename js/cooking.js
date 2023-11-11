class Player{
    constructor(associatedClass, scoreClass, number) {
        this.diceList = [];
        this.score = 0;
        this.diceClass = associatedClass;
        this.scoreClass = scoreClass
        this.number = number
    }
}

let player1 = new Player(".p1RolledDice", ".p1Score", 1);
let player2 = new Player(".p2RolledDice", ".p2Score", 2);

// let p1List = [];
// let score1 = 0;
// let p2List = [];
// let score2 = 0;

let started = false

document.querySelector(".startButton").addEventListener('click', function() {
    document.querySelector(".startButton").classList.add("hidden");
    document.getElementById("inGame").classList.remove("hidden");
})



document.querySelector(".rollButton").addEventListener('click', function() {
    score1 = ROLLTHOSEHECKINDICE(player1);
    score2 = ROLLTHOSEHECKINDICE(player2);
    // let tempArray = [];
    // let tempArray2 = []
    // for (let i = 3 - (p1List.length); i > 0; i--) {
    //     tempArray.push(Math.floor(Math.random() * 6 + 1))
    //     tempArray2.push(Math.floor(Math.random() * 6 + 1))
    // }

    // p1List.push(Math.max.apply(null, tempArray));
    // p2List.push(Math.max.apply(null, tempArray2));

    // document.querySelector(".p1RolledDice").textContent +=  ` ${tempArray} //`;
    // document.querySelector(".p2RolledDice").textContent +=  ` ${tempArray2} //`;

    // for (let i = 0; i < p1List.length; i++) {
    //     score1 += p1List[i];
    //     score2 += p2List[i];
    // }

    // document.querySelector(".p1Score").textContent =  `Player 1 Score: ${score1}`;
    // document.querySelector(".p2Score").textContent =  `Player 2 Score: ${score2}`;

    if(player1.diceList.length == 3) {
        document.querySelector(".rollButton").classList.add("hidden");
    }
})

function ROLLTHOSEHECKINDICE(player) {
    let tempArray = [];
    for(let i = 3 - (player.diceList.length); i>0; i--){
        tempArray.push(Math.floor(Math.random() * 6 + 1));
    }

    player.diceList.push(Math.max.apply(null, tempArray));
    player.score += Math.max.apply(null, tempArray);
    document.querySelector(player.diceClass).textContent += ` ${tempArray} //`;
    document.querySelector(player.scoreClass).textContent = `Player ${player.number} score: ${player.score}`;
}


