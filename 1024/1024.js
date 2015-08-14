var ROWS = 4;
var COLUMNS = 4;
var COLORS = ['lightblue', 'lightblue', 'lightskyblue', 'cornflowerblue', 'slateblue', 'mediumpurple', 'darkorchid', 'orchid', 'plum', 'violet', 'hotpink', 'deeppink', 'red', 'salmon', 'lightcoral', 'lightsalmon', 'tomato', 'chocolate', 'sienna', 'saddlebrown', 'maroon', 'black'];
var SIZE = ['70px', '70px', '70', "70px", "55px", "55px", "55px", "40px", "40px", "40px", '25px', '25px', '25px', '25px', '10px', '10px'];
var SCORE = 0;

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

function update (numbersArray, tilesArray, scoretable) {
	for(var i =0; i < COLUMNS; i++){
		for (var j=0; j < ROWS; j++) {
			if (numbersArray[i][j] == 0){
				tilesArray[i][j].innerHTML = "";
				tilesArray[i][j].className = "tile";
				tilesArray[i][j].style.backgroundColor = "lightcyan";
			} else {
				tilesArray[i][j].className = "tilenew";
				tilesArray[i][j].innerHTML = numbersArray[i][j];
				for (k = 0; k < COLORS.length ; k++) {
					if(numbersArray[i][j] == Math.pow(2,k)) {
						tilesArray[i][j].style.backgroundColor = COLORS[k];
						tilesArray[i][j].style.fontSize = SIZE[k];
					}
				}
			}
		}
	}
	scoretable.innerHTML = SCORE;
}

function stepUp (board, moved) {
	var ret = true;
	for (var i=1; i < ROWS; i++) {
		for (var j = 0 ; j < COLUMNS; j++) {
			if (board[i][j] != 0){
				if (board[i-1][j] == 0) {
					moved[i-1][j] = moved[i][j];
					moved[i][j] = false;
					board[i-1][j] = board[i][j];
					board[i][j] = 0;
					ret = false;
				}
				if (board[i][j] == board[i-1][j] && !moved[i][j]){
					moved[i-1][j] = true;
					board[i-1][j] *= 2;
					board[i][j] = 0;
					SCORE = SCORE + board[i-1][j];
					ret = false;
				}
			}
		}
	}
	return ret;
}

function stepDown (board, moved) {
	var ret = true;
	for (var i = ROWS - 2; i >= 0; i--) {
		for (var j = 0 ; j < COLUMNS; j++) {
			if (board[i][j] != 0){
				if (board[i+1][j] == 0) {
					moved[i+1][j] = moved[i][j];
          moved[i][j] = false;
					board[i+1][j] = board[i][j];
					board[i][j] = 0;
					ret = false;
				}
				if (board[i][j] == board[i+1][j] && !moved[i][j]){
					moved[i+1][j] = true;
					board[i+1][j] *= 2;
					board[i][j] = 0;
					SCORE = SCORE + board[i+1][j];
					ret = false;
				}
			}
		}
	}
	return ret;
}

function stepLeft (board, moved) {
	var ret = true;
	for (var i = 1; i < COLUMNS; i++) {
		for (var j = 0; j < ROWS; j++) {
			if(board[j][i] !=0) {
				if (board[j][i-1] == 0) {
					moved[j][i-1] = moved[j][i];
					moved[j][i] = false;
					board[j][i-1] = board[j][i];
					board[j][i] = 0;
					ret = false;
				}
				if (board[j][i] == board[j][i-1] && !moved[j][i]){
					moved[j][i-1] = true;
					board[j][i-1] *= 2;
					board[j][i] = 0;
					SCORE = SCORE + board[j][i-1];
					ret = false;
				}
			}
		}
	}					
	return ret;
}

function stepRight (board, moved) {
	var ret = true;
	for (var i = COLUMNS - 2; i >= 0; i--) {
		for (var j = 0; j < ROWS; j++) {
			if(board[j][i] !=0) {
				if (board[j][i+1] == 0) {
					moved[j][i+1] = moved[j][i];
					moved[j][i] = false;
					board[j][i+1] = board[j][i];
					board[j][i] = 0;
					ret = false;
				}
				if (board[j][i] == board[j][i+1] && !moved[j][i]){
          moved[j][i+1] = true;
					board[j][i+1] *= 2;
					board[j][i] = 0;
					SCORE = SCORE + board[j][i+1];
					ret = false;
				}
			}
		}
	}					
	return ret;
}
	

function moveUp(board){
  var moved = [[],[],[],[]];
  for(var i = 0; i < 4; i ++){
    for(var j = 0; j < 4; j++){
      moved[i][j] = false;
    }
  }
	var stepEnd = stepUp(board, moved);
	var ret = false;
	if (stepEnd == false){
		ret = true;
	}
	while( !stepEnd){
		stepEnd = stepUp(board, moved);
	}
	return ret;
}

function moveDown(board){
  var moved = [[],[],[],[]];
  for(var i = 0; i < 4; i ++){
    for(var j = 0; j < 4; j++){
      moved[i][j] = false;
    }
  }
	var stepEnd = stepDown(board, moved);
	var ret = false;
	if (stepEnd == false){
		ret = true;
	}
	while( !stepEnd){
		stepEnd = stepDown(board, moved);
	}

	return ret;
}

function moveRight(board){
  var moved = [[],[],[],[]];
  for(var i = 0; i < 4; i ++){
    for(var j = 0; j < 4; j++){
      moved[i][j] = false;
    }
  }
	var stepEnd = stepRight(board, moved);
	var ret = false;
	if (stepEnd == false){
		ret = true;
	}
	while( !stepEnd){
		stepEnd = stepRight(board, moved);
	}
	return ret;
}

function moveLeft(board){
  var moved = [[],[],[],[]];
  for(var i = 0; i < 4; i ++){
    for(var j = 0; j < 4; j++){
      moved[i][j] = false;
    }
  }
	var stepEnd = stepLeft(board, moved);
	var ret = false;
	if (stepEnd == false){
		ret = true;
	}
	while( !stepEnd){
		stepEnd = stepLeft(board, moved);
	}
	return ret;
}

function drawNew(board){
	var column = getRandom(0,COLUMNS);
	var row = getRandom(0,ROWS);
	while (board[row][column] != 0){
		column = getRandom(0,COLUMNS);
		row = getRandom(0,ROWS);
	}
	var number = getNumber();
	board[row][column] = number;
}

function End(board){
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

function checkKey(board, tiles, scoretable) {
   var e = window.event;
   var move = false;
   if (e.keyCode == '38') {
      move = moveUp(board);
   }
   else if (e.keyCode == '40') {
      move = moveDown(board);
   }
   else if (e.keyCode == '37') {
      move = moveLeft(board);
   }
   else if (e.keyCode == '39') {
      move = moveRight(board);
   }
   if(move){
	  drawNew(board);
      if(End(board)){
        document.getElementById('koniec').innerHTML = "YOU LOSE!";
	  }
	  update(board, tiles, scoretable);
   }
 
}

function game1024(){
	var positionTop = 0;
	var tilesArray = []
	var numbersArray = [];
	
	var scoring = document.createElement('div');
	scoring.id = 'score';
	scoring.style.left = (110 * COLUMNS /2.7) + "px";
	scoring.innerHTML = "SCORE &nbsp;&nbsp;&nbsp;"
	document.getElementsByTagName('body')[0].appendChild(scoring);
	var scoretable = document.createElement('div');
	scoretable.id = "sTable";
	scoring.appendChild(scoretable);
	
	
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

	document.body.addEventListener('keydown', function(){checkKey(numbersArray, tilesArray, scoretable)});
	
	
	update (numbersArray, tilesArray, scoretable);
}
