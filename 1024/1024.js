var ROWS = 4;
var COLUMNS = 4;
	
function getRandom (min, max) {
	return Math.floor(Math.random() * (max - min));
}

function getNumber(){
  var number = Math.random();
  if (number > 0.2){
    number = 1;
  } else {
    number = 2;
  }
  return number;
}

function update (numbersArray, tilesArray) {
	for(var i =0; i < COLUMNS; i++){
		for (var j=0; j < ROWS; j++) {
			if (numbersArray[i][j] == 0){
				tilesArray[i][j].innerHTML = "";
				tilesArray[i][j].className = "tile";
			} else {
				tilesArray[i][j].className = "tilenew";
				tilesArray[i][j].innerHTML = numbersArray[i][j];
			}
		}
	}
}

function stepUp (board) {
	var ret = true;
	for (var i=1; i < ROWS; i++) {
		for (var j = 0 ; j < COLUMNS; j++) {
			if (board[i][j] != 0){
				if (board[i-1][j] == 0) {
					board[i-1][j] = board[i][j];
					board[i][j] = 0;
					ret = false;
				}
				if (board[i][j] == board[i-1][j]){
					board[i-1][j] *= 2;
					board[i][j] = 0;
					ret = false;
				}
			}
		}
	}
	return ret;
}

function stepDown (board) {
	var ret = true;
	for (var i = ROWS - 2; i >= 0; i--) {
		for (var j = 0 ; j < COLUMNS; j++) {
			if (board[i][j] != 0){
				if (board[i+1][j] == 0) {
					board[i+1][j] = board[i][j];
					board[i][j] = 0;
					ret = false;
				}
				if (board[i][j] == board[i+1][j]){
					board[i+1][j] *= 2;
					board[i][j] = 0;
					ret = false;
				}
			}
		}
	}
	return ret;
}

function stepLeft (board) {
	var ret = true;
	for (var i = 1; i < COLUMNS; i++) {
		for (var j = 0; j < ROWS; j++) {
			if(board[j][i] !=0) {
				if (board[j][i-1] == 0) {
					board[j][i-1] = board[j][i];
					board[j][i] = 0;
					ret = false;
				}
				if (board[j][i] == board[j][i-1]){
					board[j][i-1] *= 2;
					board[j][i] = 0;
					ret = false;
				}
			}
		}
	}					
	return ret;
}

function stepRight (board) {
	var ret = true;
	for (var i = COLUMNS - 2; i >= 0; i--) {
		for (var j = 0; j < ROWS; j++) {
			if(board[j][i] !=0) {
				if (board[j][i+1] == 0) {
					board[j][i+1] = board[j][i];
					board[j][i] = 0;
					ret = false;
				}
				if (board[j][i] == board[j][i+1]){
					board[j][i+1] *= 2;
					board[j][i] = 0;
					ret = false;
				}
			}
		}
	}					
	return ret;
}
	

function moveUp(board){
	var stepEnd = stepUp(board);
	var ret = false;
	if (stepEnd == false){
		ret = true;
	}
	while( !stepEnd){
		stepEnd = stepUp(board);
	}
	return ret;
}

function moveDown(board){
	var stepEnd = stepDown(board);
	var ret = false;
	if (stepEnd == false){
		ret = true;
	}
	while( !stepEnd){
		stepEnd = stepDown(board);
	}
	return ret;
}

function moveRight(board){
	var stepEnd = stepRight(board);
	var ret = false;
	if (stepEnd == false){
		ret = true;
	}
	while( !stepEnd){
		stepEnd = stepRight(board);
	}
	return ret;
}

function moveLeft(board){
	var stepEnd = stepLeft(board);
	var ret = false;
	if (stepEnd == false){
		ret = true;
	}
	while( !stepEnd){
		stepEnd = stepLeft(board);
	}
	return ret;
}

function losujNowy(board){
	var column = getRandom(0,COLUMNS);
	var row = getRandom(0,ROWS);
	while (board[row][column] != 0){
		column = getRandom(0,COLUMNS);
		row = getRandom(0,ROWS);
	}
	var number = getNumber();
	board[row][column] = number;
}

function koniec(board){
	for (var i = 0; i < COLUMNS; i++){
		for (var j =0; j < ROWS; j++) {
			if (board[i][j] == 0) {
				return false;
			}
		}
	}
	var newboard = [];
	for( var i = 0; i < ROWS; i++){
		newboard.push([]);
		for( var j = 0; j < COLUMNS; j ++ ){
			newboard[i].push(board[i][j]);
		}
	}
	if(moveLeft(newboard) || moveRight(newboard) || moveUp(newboard) || moveDown(newboard)){
		return false;
	}
	
	return true;
}

function checkKey(board, tiles) {
   var e = window.event;
   var move = false;
   if (e.keyCode == '38') {
	  move = moveUp(board);
      //document.getElementById("test").innerHTML = "UP";
   }
   else if (e.keyCode == '40') {
	  move = moveDown(board);
      //document.getElementById("test").innerHTML = "DOWN";   
   }
   else if (e.keyCode == '37') {
      move = moveLeft(board);
      //document.getElementById("test").innerHTML = "LEFT";   
   }
   else if (e.keyCode == '39') {
      move = moveRight(board);
      //document.getElementById("test").innerHTML = "RIGHT";   
   }
   if(move){
	  losujNowy(board);
	  if(koniec(board)){
		document.getElementById('koniec').innerHTML = "YOU LOSE!";
	  }
	  update(board, tiles);
   }
 
}

function game1024(){
	var positionTop = 0;
	var tilesArray = []
	var numbersArray = [];
	
	var main = document.createElement('div');
	main.id = 'main';
	main.style.height = (110 * ROWS) + "px";
	main.style.width = (110 * COLUMNS) + "px";
	document.getElementsByTagName('body')[0].appendChild(main);
	
	for(var i = 0; i < COLUMNS; i++) {
		tilesArray.push([]);
		numbersArray.push([]);
		for (var counter=0, positionLeft =0; counter < ROWS; counter ++, positionLeft +=110) {
			var nexttile = document.createElement('div');
			nexttile.className = "tile";
			nexttile.style.top = positionTop + "px";
			nexttile.style.left = positionLeft + "px";
			main.appendChild(nexttile);
			tilesArray[i].push(nexttile);
			numbersArray[i].push(0);
			}
		positionTop +=110;
	}
	
	var row = getRandom(0,ROWS);
	var column = getRandom(0,COLUMNS);
	var number = getNumber();
	numbersArray[row][column] = number;
	var newcolumn = getRandom(0,COLUMNS);
	var newrow = getRandom(0,ROWS);
	while (newcolumn == column && newrow == row){
		newcolumn = getRandom(0,COLUMNS);
		newrow = getRandom(0,ROWS);
	}
	var number = getNumber();
	numbersArray[newrow][newcolumn] = number;

	document.body.addEventListener('keydown', function(){checkKey(numbersArray, tilesArray)});
	
	
	update (numbersArray, tilesArray);
}
