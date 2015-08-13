	var ROWS = 4;
	var COLUMNS = 4;
	var i = 0;
	var j = 0;
	
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
	for(i =0; i < COLUMNS; i++){
		for (j=0; j < ROWS; j++) {
			if (numbersArray[i][j] == 0)
			{} else {
			tilesArray[i][j].innerHTML=numbersArray[i][j];
			}
		}
	}
}

function game1024(){
	var positionTop = 0;
	var tilesArray = []
	var numbersArray = [];
	
	var main = document.createElement('div');
	main.id = 'main';
	document.getElementsByTagName('body')[0].appendChild(main);
	
	for(i; i < COLUMNS; i++) {
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
  var row = getRandom(0,3);
  var column = getRandom(0,3);
  var number = getNumber();
  numbersArray[row][column] = number;
  //next line uncoment only for debug
  //tilesArray[row][column].innerHTML = number;
  var newcolumn = getRandom(0,3);
  var newrow = getRandom(0,3);
  while (newcolumn == column && newrow == row){
    newcolumn = getRandom(0,3);
    newrow = getRandom(0,3);
  }
  var number = getNumber();
  numbersArray[newrow][newcolumn] = number;
  //next line uncoment only for debug
  //tilesArray[newrow][newcolumn].innerHTML = number;
	
	update (numbersArray, tilesArray);
}
