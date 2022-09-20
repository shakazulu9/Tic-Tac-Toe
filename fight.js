const tiles = document.querySelectorAll('.cell')
const player_1 = 'X';
const player_2 ='O';
let turn = player_1;


const boardPosition = Array(tiles.length);
boardPosition.fill(null); 



const playAgain = document.getElementById('reset')

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

function tileClick(event) {
    const tiles = event.target;
    const tileNumber = tile.dataset.index;
    if (tiles.innerText != " ") {
      return;
    }
  
    if (turn === player_1) {
      tiles.innerText = player_1;
      boardPosition[tileNumber - 1] = player_1;
      turn = player_2;
    } else {
      tiles.innerText = player_2;
      boardPosition[tileNumber - 1] = player_2;
      turn = player_1;
    }

}
tileClick()