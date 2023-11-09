let p1List = [];
let p2lList = [];

document.querySelector(".player1Button").addEventListener('click', function() {
    let tempArray = [];
    for (let i = 3 - (p1List.length); i > 0; i--) {
        tempArray.push(Math.floor(Math.random() * 6 + 1))
    }
    p1List.push(Math.max.apply(null, tempArray));
    document.querySelector(".p1RolledDice").textContent +=  `${tempArray}`;
})