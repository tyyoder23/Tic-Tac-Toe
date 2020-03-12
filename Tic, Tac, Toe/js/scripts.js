let turns = 1;
let gameActive = true;
let gamePiece;
let tilesChanged = 0;

let gameInfo = document.getElementById('gameInfo');
let playersTurn = document.getElementById('playersTurn');

let topLeft = document.getElementById('topLeft');
let topCenter = document.getElementById('topCenter');
let topRight = document.getElementById('topRight');

let centerLeft = document.getElementById('centerLeft');
let center = document.getElementById('center');
let centerRight = document.getElementById('centerRight');

let bottomLeft = document.getElementById('bottomLeft');
let bottomCenter = document.getElementById('bottomCenter');
let bottomRight = document.getElementById('bottomRight');

document.getElementById('topLeft').addEventListener('click', function(e) {
    selectTile(e);
});

document.getElementById('topCenter').addEventListener('click', function(e) {
    selectTile(e);
});

document.getElementById('topRight').addEventListener('click', function(e) {
    selectTile(e);
});

document.getElementById('centerLeft').addEventListener('click', function(e) {
    selectTile(e);
});

document.getElementById('center').addEventListener('click', function(e) {
    selectTile(e);
});

document.getElementById('centerRight').addEventListener('click', function(e) {
    selectTile(e);
});

document.getElementById('bottomLeft').addEventListener('click', function(e) {
    selectTile(e);
});

document.getElementById('bottomCenter').addEventListener('click', function(e) {
    selectTile(e);
});

document.getElementById('bottomRight').addEventListener('click', function(e) {
    selectTile(e);
});

document.getElementById('restartGame').addEventListener('click', function(e) {
  location.reload();
});



function selectTile (e) {


if (!e.target.textContent && gameActive === true) {

                if  (isEven(turns)) {
                    e.target.textContent = 'X';
                    gamePiece = 'X';
                    activePlayer = 1;
                    playersTurn.textContent = 'Player One\'s Turn';
                    turns++
                    winCondition(gamePiece, activePlayer);
                    tilesChanged++;
                }
                else {
                    e.target.textContent = 'O';
                    gamePiece = 'O';
                    activePlayer = 2;
                    playersTurn.textContent = 'Player Two\'s Turn';
                    turns++
                    winCondition(gamePiece, activePlayer);
                    tilesChanged++;
                }


        }



}



function winCondition(gamePiece, activePlayer) {

    if (topCenter.textContent === gamePiece && center.textContent === gamePiece &&  bottomCenter.textContent === gamePiece) {
        gameOver(activePlayer);
   }
    else if (topLeft.textContent === gamePiece && centerLeft.textContent === gamePiece &&                   bottomLeft.textContent === gamePiece) {
        gameOver(activePlayer);
   }
     else if (topRight.textContent === gamePiece && centerRight.textContent === gamePiece &&  bottomRight.textContent === gamePiece) {
        gameOver(activePlayer);
   }
     else if (topRight.textContent === gamePiece && centerRight.textContent === gamePiece &&  bottomRight.textContent === gamePiece) {
         gameOver(activePlayer);
   }
      else if (topLeft.textContent === gamePiece && topCenter.textContent === gamePiece &&  topRight.textContent === gamePiece) {
         gameOver(activePlayer);
   }
      else if (centerLeft.textContent === gamePiece && center.textContent === gamePiece &&  centerRight.textContent === gamePiece) {
         gameOver(activePlayer);
   }
      else if (bottomLeft.textContent === gamePiece && bottomCenter.textContent === gamePiece &&  bottomRight.textContent === gamePiece) {
         gameOver(activePlayer);
   }
     else if (topLeft.textContent === gamePiece && center.textContent === gamePiece &&  bottomRight.textContent === gamePiece) {
         gameOver(activePlayer);
   }
     else if (topRight.textContent === gamePiece && center.textContent === gamePiece &&  bottomLeft.textContent === gamePiece) {
         gameOver(activePlayer);
   }
   else if (turns === 10) {
     gameInfo.textContent = `Out of Turns! It's a Draw!`;
     playersTurn.style.display = "none";
     gameActive = false;
   }

}

function gameOver (acitvePlayer) {
        gameInfo.textContent = `Player ${activePlayer}  Wins!`;
        playersTurn.style.display = "none";
        gameActive = false;
        return gameActive;
    }

function isEven(value) {
        if (value%2 == 0)
            return true;
        else
            return false;
    }
