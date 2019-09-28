document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {}

board.cells = []

//harcode
// board.cells[0] = {row: 0, col: 0}
// board.cells[1] = {row: 0, col: 1}
// board.cells[2] = {row: 0, col: 2}
// board.cells[3] = {row: 1, col: 0}
// board.cells[4] = {row: 1, col: 1}
// board.cells[5] = {row: 1, col: 2}
// board.cells[6] = {row: 2, col: 0}
// board.cells[7] = {row: 2, col: 1}
// board.cells[8] = {row: 2, col: 2}

//for loop to create cells
// var size = 3;
// for(var r = 0; r < size; r++){
//   for(var c = 0; c < size; c++){
//     board.cells.push({row: r, col: c})
//   }
// }

// //Created function to automatize including properties in the board
// // function createCells(size){
// //   for(var r = 0; r < size; r++){
// //     for(var c = 0; c < size; c++){
// //       board.cells.push({row: r, col: c})
// //     }
// //     return board
// // }

// Including IsMine and hideen
// for(var i = 0; i <board.cells.length; i++){
//   board.cells[i].isMine = true
//   board.cells[i].hidden = true
// }


function createBoard(size) {

  for (var r = 0; r < size; r++) {
    for (var c = 0; c < size; c++) {
      board.cells.push({ row: r, col: c, isMine: true, hidden: true })
    }
  }

  return board
}

createBoard(3);

function startGame() {
  //   // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])

  }
  lib.initBoard()
}


// // Define this function to look for a win condition:
// //
// // 1. Are all of the cells that are NOT mines visible?
// // 2. Are all of the mines marked?
// function checkForWin() {

//   // You can use this function call to declare a winner (once you've
//   // detected that they've won, that is!)
//   //   lib.displayMessage('You win!')
// }

// // Define this function to count the number of mines around the cell
// // (there could be as many as 8). You don't have to get the surrounding
// // cells yourself! Just use `lib.getSurroundingCells`: 
// //
// //   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
// //
// // It will return cell objects in an array. You should loop through 
// // them, counting the number of times `cell.isMine` is true.

function countSurroundingMines(cell) {
  let count = 0;
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col)
  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine) {
      count++
    }
  }
  return count
}

