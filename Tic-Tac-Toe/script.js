let isPlayer1Playing = true;
let noOfMoves = 0;
let arrGame = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

document.querySelector("#divGame").addEventListener("click", function(e){
  if(e.target.className === "cell") {
    let row = e.target.dataset.row;
    let col = e.target.dataset.col;
    if (e.target.innerHTML === "" && noOfMoves <= 9) {
      if(isPlayer1Playing) {
        arrGame[row][col] = '1';
        e.target.innerHTML = 'X';
      }
      else {
        arrGame[row][col] = '2';
        e.target.innerHTML = 'O';
      }
      isPlayer1Playing = !isPlayer1Playing;
      noOfMoves++;
    }
    else {
      
    }
  }
});

document.querySelector("#btnReset").addEventListener("click", function(){
  var cells = document.querySelectorAll(".cell");
  //Reset cells
  cells.forEach(function(cell){
    cell.innerHTML = "";
  });

  //Reset counter
  noOfMoves = 0;
})