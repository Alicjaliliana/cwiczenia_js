	var ROWS = 4;
	var COLUMNS = 4;
	var i = 0;
	
function getRandom (min, max) {
	return Math.floor(Math.random() * (max - min));
}

function game1024(){
	var positionTop = 0;
	var tilesArray = []
	var numbersArray = [];
	
	var main = document.createElement('div');
	main.id = 'main';
	document.getElementsByTagName('body')[0].appendChild(main);
	
	for(i; i < COLUMNS; i++) {
		var tile = document.createElement('div');
		tile.className = "tile";
		tile.style.top = positionTop + "px";
		tilesArray.push([]);
		numbersArray.push([]);
		for (var counter = 0, positionLeft =0; counter < ROWS; counter ++, positionLeft +=110) {
			var nexttile = document.createElement('div');
			nexttile.className = "tile";
			nexttile.style.top = positionTop + "px";
			nexttile.style.left = positionLeft + "px";
			main.appendChild(nexttile);
			tilesArray[i].push(nexttile);
			numbersArray[i].push("0");
			}
		main.appendChild(tile);
		positionTop +=110;
	}
	for (counter = 0; counter < 2; counter ++) {
	var row = getRandom(0,3);
	var column = getRandom(0,3);
	var number = Math.random();
	if (number > 0.5){
		number = 1;
	} else {
		number = 2;
	}
	tilesArray[row][column].innerHTML = number;
	}

}