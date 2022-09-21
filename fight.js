const tiles = document.querySelectorAll('.cell')
const reset = document.getElementById('reset')
const player_1 = 'X';
const player_2 ='O';
let turn = player_1;


const boardPosition = Array(tiles.length);
boardPosition.fill(null); 




tiles.forEach((tile) => tile.addEventListener("click", tileClick));


function setHoverText() {

    tiles.forEach((tile) => {
        tile.classList.remove("x-hover");
        tile.classList.remove("o-hover");
      });

    const hoverClass = `${turn.toLowerCase()}-hover`;
  
    tiles.forEach((tile) => {
      if (tile.innerText === "") {
        tile.classList.add(hoverClass);
      }
    });
  }
  
  setHoverText();

function tileClick(event) {
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if (tile.innerText != "") {
      return;
    }
  
    if (turn === player_1) {
      tile.innerText = player_1;
      boardPosition[tileNumber - 1] = player_1;
      turn = player_2;
    } else {
      tile.innerText = player_2;
      boardPosition[tileNumber - 1] = player_2;
      turn = player_1;
    }

    setHoverText()
}

