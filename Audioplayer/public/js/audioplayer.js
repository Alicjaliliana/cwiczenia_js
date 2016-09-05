function getRandom () {
	var Number = Math.floor(Math.random() * (500 - 125) + 125);
	 return Number;
}


var numbs = [ ];
var rise = [];


window.onload = function() {
	for(var i = 0 ; i < 20; i ++){
		numbs.push(0);
		var block = document.createElement("div");
		block.className = "block";
		block.id = "numbers" + i;
		numbs[i] = getRandom();
		block.style.backgroundColor = '#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('');
		document.getElementById("block-container").appendChild(block);
	}

	function generateNumber () {
		for (var i = 0 ; i < 20 ; i++) {
			function changeHeight () {
				
				rise[i] = getRandom();
				jQuery('#numbers'+i).animate({"height": rise[i] + "px" });

			}
			changeHeight();
		}
	}
	//generateNumber();
	document.getElementById("audio").onclick = setInterval(generateNumber, 80);


}