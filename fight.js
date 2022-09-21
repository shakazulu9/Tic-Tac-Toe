const tiles = document.querySelectorAll('.cell')

const player_1 = 'X';
const player_2 ='O';
let turn = player_1;


const boardPosition = Array(tiles.length);
boardPosition.fill(null); 

const winnings = [
    //rows
    {combo: [1, 2, 3]},
    {combo: [4, 5, 6]},
    {combo: [7, 8, 9]},
    //columns
    {combo: [1, 4, 7]},
    {combo: [2, 5, 8]},
    {combo: [3, 6, 9]},
    //diagonals
    {combo: [1, 5, 9]},
    {combo: [3, 5, 7]},
  ];


tiles.forEach((tile) => tile.addEventListener("click", tileClick));



function setHoverText() {
    const hoverClass = `${turn.toLowerCase()}-hover`;

    tiles.forEach((tile) => {
        tile.classList.remove("x-hover");
        tile.classList.remove("o-hover");
    });

  
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
    winner()
}

function winner() {
    
    for (const winningComb of winnings) {

      const combo = winningComb.combo;
    
      const tileValue1 = boardPosition[combo[0] - 1];
      const tileValue2 = boardPosition[combo[1] - 1];
      const tileValue3 = boardPosition[combo[2] - 1];
  
      if (
        tileValue1 != null &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
      ) 
        return;
        
    }
}

const reset = document.getElementById('reset')
reset.addEventListener('click', restart)

function restart() {
    boardPosition.fill(null);
    tiles.forEach((tile) => (tile.innerText = ""));
    turn = player_1;
    setHoverText();
  }