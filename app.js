let cells = document.querySelectorAll('.row > div');
let resetbtn = document.getElementById('Reset')
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}
let draw = cells.length > 9
let turnCounter = 0
let winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
];

function drawcheck(winner) {
    if (turnCounter == 9 && !winner) {
        alert('Draw!')
    }
}


function checkForWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        let xCount = 0;
        let oCount = 0;

        for (let j = 0; j < winningCombos[i].length; j++) {
            if (winningCombos[i][j].textContent == "X") {
                xCount++
            } else if (winningCombos[i][j].textContent == "O") {
                oCount++
            }

            if (xCount == 3) {
                alert("X Wins!")
                return true
            } else if (oCount == 3) {
                alert("O Wins!")
                return true
            }
        }
    }
    return false

}

function cellClicked() {
    if (turnCounter % 2 == 0) {
        event.target.textContent = 'X';
    } else {
        event.target.textContent = 'O';
    }

    let winner = checkForWinner();
    turnCounter++;
    drawcheck(winner)
}

function reset() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ""
        cells[i].addEventListener('click', cellClicked, { once: true });

    }
    statusMessage.textContent = '';
    turnCounter = 0
}
resetbtn.addEventListener('click', reset)