let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetGame");

let playerTurnO = true;

const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(playerTurnO) {
            box.innerHTML = "O";
            playerTurnO = false;
        }else{
            box.innerHTML = "X";
            playerTurnO = true;
        }
        box.disabled = true;
        checkWin();
        resetBtn.addEventListener("click", () => {
            box.innerHTML = "";
            box.disabled = false;
        });
    })
})

const checkWin = () => {
    let boxValues = [];
    boxes.forEach((box) => {
        boxValues.push(box.innerHTML);
    })
    for(let i = 0; i < winPatterns.length; i++) {
        let [a, b, c] = winPatterns[i];
        if(boxValues[a] && boxValues[a] === boxValues[b] && boxValues[a] === boxValues[c]) {
            alert(`${boxValues[a]} wins!`);
            
        }
    }
    
}