function game1024(){
	var rows = 4;
	var columns = 4;
	var i = 0;
	var positionTop = 0;
	var tilesArray = []
	
	var main = document.createElement('div');
	main.id = 'main';
	document.getElementsByTagName('body')[0].appendChild(main);
	
	for(i; i < columns; i++) {
		var tile = document.createElement('div');
		tile.className = "tile";
		tile.style.top = positionTop + "px";
		tilesArray.push(tile);
		for (var counter = 0, positionLeft =0; counter < rows; counter ++, positionLeft +=110) {
			var nexttile = document.createElement('div');
			nexttile.className = "tile";
			nexttile.style.top = positionTop + "px";
			nexttile.style.left = positionLeft + "px";
			main.appendChild(nexttile);
			tilesArray[i].push(nexttile);
		}
		main.appendChild(tile);
		positionTop +=110;
	}
}