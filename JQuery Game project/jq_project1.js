var player1 = prompt('Player One: Enter your name, you will be Blue');
// color has to be in rgb format for jQuery
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt('Player One: Enter your name, you will be Blue')
var player2Color = 'rgb(237, 45, 73)';

// boolea var that tell whether the game is running or not
var game_on = true;
var table = $('table tr');

function reportWin(rowNum, colNum){
  console.log("You won starting at this row, col");
  console.log(rowNum);
  console.log(colNum);
}

function changeColor(rowIndex,colIndex,color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);

}
