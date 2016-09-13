var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var context = new AudioContext();
var audio = new Audio();
var source;
var numbs = [];
var RBlocksNumber = [];
var rise = [];
var buffer = [];
var numStripes = 256;
var height = [];
var circles = [];
var music = ['/src/EdEddEddy.mp3', '/src/BlankSpace.mp3', '/src/DareLaLaLa.mp3', '/src/Fairyland.mp3',
'/src/FixedAtZero.mp3', '/src/GetJinxed.mp3', '/src/Omnos.mp3', '/src/Riot.mp3', '/src/Smile.mp3', 
'/src/Allatonce.mp3'];
var MusicIDs = [];

function PrepareMusicPlaylist (){
	for (var i = 0; i < music.length; i++){
		var TrackName = music[i];
		TrackName = TrackName.slice(5, -4);
		var TrackContainer = document.createElement("div");
		TrackContainer.className = "button";
		TrackContainer.id = TrackName;
		document.getElementById("ChooseMusicButtons").appendChild(TrackContainer);
		var TrackButton = document.createElement("button");
		TrackButton.id = TrackName + "Butt";
		TrackButton.innerHTML = TrackName;
		document.getElementById(TrackName).appendChild(TrackButton);
	}
}

function prepareContent () {
	document.getElementById("block-container").style.display = 'flex';
	document.getElementById("roundBlock-container").style.display = "none";
	document.getElementById("circles-container").style.display = "none";
	PrepareMusicPlaylist();
	for(var i = 0 ; i < numStripes; i ++){
		var block = document.createElement("div");
		block.className = "block";
		block.id = "numbers" + i;
		block.style.backgroundColor = createColour();
		numbs.push(block);
		document.getElementById("block-container").appendChild(block);
	}
	for (var j = 0; j < numStripes/5; j++ ) {
		var roundBlock = document.createElement("div");
		roundBlock.className = "rBlock";
		roundBlock.id = "RBlockNumber" + j;
		var gradient = createColour();
		roundBlock.style.background = "linear-gradient(" + gradient + ", " + createColour() 
			+ ", " + gradient + ")";
		RBlocksNumber.push(roundBlock);
		document.getElementById("roundBlock-container").appendChild(roundBlock);
	}	
	for (var k = 0; k < numStripes/5; k++ ) {
		var circle = document.createElement("div");
		circle.className = "circle";
		circle.id = "circle" + k;
		var colour = createColour();
		circle.style.border = buffer[k]*100 + "px solid " + colour;
		circles.push(circle);
		document.getElementById("circles-container").appendChild(circle);
	}
	for (var i = 0; i < music.length; i++){
		var MusicID = music[i].slice(5, -4);
		MusicIDs.push(MusicID);
	}
}

function getMusicTrack () {
	var NrTrack = getRandomInt(0, 9);
	var MusicTrack = music[NrTrack];
	return MusicTrack;
}

function cleanOptionsButt () {
		var ButtOptions = document.getElementsByClassName("buttonOptions");
		for (var i = 0; i < ButtOptions.length; i++) {
			ButtOptions[i].style.display = "none";
		}
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom () {
	var Number = Math.floor(Math.random() * (500 - 125) + 125);
	 return Number;
}

function createColour () {
	var red = getRandomInt(0, 256);
	var blue = getRandomInt(0, 256);
	var green = getRandomInt(0, 256);
	var color = 'rgb('+ red +','+ green + ',' + blue + ')';
	return color;
}

function cleanColours() {
	document.getElementById("block-container").style.display = 'flex';
	document.getElementById("roundBlock-container").style.display = "none";
	document.getElementById("circles-container").style.display = "none";
	var color = createColour();
	console.log('in cleanColours');
	for (var i = 0; i < numStripes; i++){
		var changedBlock = document.getElementById("numbers" + i);
		changedBlock.style.background = 'transparent';
		changedBlock.style.backgroundColor = color;

	}
}

function RandColours () {
	document.getElementById("block-container").style.display = 'flex';
	document.getElementById("roundBlock-container").style.display = "none";
	document.getElementById("circles-container").style.display = "none";
	for (var i = 0; i < numStripes; i++){
		var color = createColour();
		var changedBlock = document.getElementById("numbers" + i);
		changedBlock.style.background = 'transparent';
		changedBlock.style.backgroundColor = color;
	}
}

function RBlocksMoreGradient() {
	document.getElementById("roundBlock-container").style.display = "flex";
	document.getElementById("block-container").style.display = 'none';
	document.getElementById("circles-container").style.display = "none";
	var middleColour = createColour();
	var middleColours = middleColour + "," + createColour() + "," + middleColour;
	for (var i = 0; i < RBlocksNumber.length; i++) {
		var FirstColour = createColour();
		var changedBlock = document.getElementById("RBlockNumber" + i);
		changedBlock.style.background = "linear-gradient(" + 
			FirstColour + ", " + middleColours + ", " + FirstColour + ")";;
	}
}

function RBlocksAddColour () {
	document.getElementById("roundBlock-container").style.display = "flex";
	document.getElementById("block-container").style.display = 'none';
	document.getElementById("circles-container").style.display = "none";
	var FirstColour = createColour();
	var middleColour = createColour();
	for (var i = 0; i < RBlocksNumber.length; i++) {
		var changedBlock = document.getElementById("RBlockNumber" + i);
		changedBlock.style.background = "linear-gradient(" + 
			FirstColour + ", " + middleColour + ", " + FirstColour + ")";;
	}
}
function RBlocksRandColours () {
	document.getElementById("roundBlock-container").style.display = "flex";
	document.getElementById("block-container").style.display = 'none';
	document.getElementById("circles-container").style.display = "none";
	for (var i = 0; i < RBlocksNumber.length; i++) {
		var FirstColour = createColour();
		var middleColour = createColour();
		var changedBlock = document.getElementById("RBlockNumber" + i);
		changedBlock.style.background = "linear-gradient(" + 
			FirstColour + ", " + middleColour + ", " + FirstColour + ")";;
	}
}

function CirclesCol () {
	document.getElementById("block-container").style.display = 'none';
	document.getElementById("roundBlock-container").style.display = "none";
	document.getElementById("circles-container").style.display = "flex";
	for (var i = 0; i < numStripes/5; i++){
		var colour = createColour();
		var changedCircle = document.getElementById("circle" + i);
		changedCircle.style.border = buffer[i]*3 + "px solid " + colour;
	}
}

function CirclesBBorder () {
	document.getElementById("block-container").style.display = 'none';
	document.getElementById("roundBlock-container").style.display = "none";
	document.getElementById("circles-container").style.display = "flex";
	for (var i = 0; i < numStripes/5; i++){
		var colour = createColour();
		var changedCircle = document.getElementById("circle" + i);
		changedCircle.style.border = buffer[i]*75 + "px solid " + colour;
	}
}

function processAudio(e) {
	var buf = e.inputBuffer.getChannelData(0);
	var out = e.outputBuffer.getChannelData(0);
	var amp = 0;

	// Iterate through buffer to get the max amplitude for this frame
	for (var i = 0; i < buf.length; i++) {
		var loud = Math.abs(buf[i]);
		if(loud > amp) {
			amp = loud;
		}
		// write input samples to output unchanged
		out[i] = buf[i];
		
	}
	for(var i = 0 ; i < numStripes; i ++){
		buffer[i] = 0;
	}
	for (var i = 0 ; i < buf.length; i++) {
		buffer[Math.floor(i * numStripes / buf.length + 1)] += Math.abs(out[i]);
	}
}

function updateColumns () {
	for (var i = 0 ; i < numStripes ; i++) {
		function changeHeight () {
			
			//jQuery('#numbers'+i).animate({"height": rise[i] + "px" });
			numbs[i].style.height = (buffer[i] * 100) +"px";
			//console.log(buffer[i]);

		}
		changeHeight();
	}
}

function updateRoundBlocks () {
	for (var i = 0; i < Math.floor(numStripes/6)+1; i++){
		RBlocksNumber[0].style.display = "none";
		RBlocksNumber[i].style.height = (buffer[i]*100) + "px";
		RBlocksNumber[i].style.width = (buffer[i]*100) + "px";
		RBlocksNumber[i].style.borderRadius = (buffer[i]*100) + "px";
	}
}

function UpdateCircles () {
	for (var i = 0; i < Math.floor(numStripes/5)+1; i++){
		var changedCircle = document.getElementById("circle" + i);
		changedCircle.style.height = (buffer[i]*100) + "px";
		changedCircle.style.width = (buffer[i]*100) + "px";
		changedCircle.style.borderRadius = (buffer[i]*100) + "px";
		function Fading () {
			$(changedCircle).fadeOut(2000*buffer[i], function () {$(this).fadeIn(2000*buffer[i])})
		}
		Fading();
	}
}

window.addEventListener('load',function() {
	prepareContent();


	
	for(var i = 0 ; i < numStripes; i ++){
		buffer.push(0);
	}
	// Add columns
		
	setInterval(updateColumns, 50);
	setInterval(updateRoundBlocks, 100);
	setInterval(UpdateCircles, 100);
	//setInterval(generateRandom, 5);


	// Add an audio element
	audio.src = getMusicTrack();
	audio.controls = true;
	audio.preload = true;
	document.getElementById("audio").appendChild(audio);

	for (var i = 0; i < music.length; i++){
		var MusicName = document.getElementById(MusicIDs[i] + "Butt");
		MusicName.onclick = function () {
		console.log(MusicName)
		}
	}

	audio.addEventListener('canplaythrough',function() {
		console.log("canplaythrough");
		var node = context.createMediaElementSource(audio);
		var processor = context.createScriptProcessor(2048,1,1);
		processor.onaudioprocess = processAudio;
		node.connect(processor);
		processor.connect(context.destination);
		audio.play();
	});

	var SimpleColour = document.getElementById("SimpleColour");
	SimpleColour.onclick = function (){
		cleanOptionsButt();
		document.getElementById("SColButt").style.display = "block";
		cleanColours();
		console.log('in SimpleColour');
	};
	
	var SColCleanColour = document.getElementById("SColCleanColours");
	SColCleanColour.onclick = function () {
		cleanColours();
		console.log('in SColCleanColour');
	}
	
	var SColAddGradient = document.getElementById("SColAddGradient");
	SColAddGradient.onclick = function (){
		var blue = getRandomInt(0, 196);
		var green = getRandomInt(0, 256);
		var red = getRandomInt(60, 256);
		for (var i = 0 ; i < numStripes ; i++) {
			var changedBlock = document.getElementById("numbers" + i);
			function getHeight () {
				var height = parseInt(changedBlock.style.height);
				return height;
			}
			function Gradient () {
				setInterval(getHeight, 200);
				var height = getHeight();
				changedBlock.style.background =  'linear-gradient(' + 'rgb(' + red + ', ' +
				green + ', ' + blue + ')' + ', rgb(' + (green - height) + ', ' +
				blue + ', ' + (red + height) + '))';
				}
			Gradient();
		}
	}
	
	var RandomColours = document.getElementById("RandomColours");
	RandomColours.onclick = function (){
		cleanOptionsButt();
		document.getElementById("RColButt").style.display = "block";
		RandColours();
	}
	
	var RColCleanColour = document.getElementById("RColCleanColours");
	RColCleanColour.onclick = function () {
		RandColours();
	}
	
	var RColAddGradient = document.getElementById("RColAddGradient");
	RColAddGradient.onclick = function (){
		for (var i = 0 ; i < numStripes ; i++) {
			var blue = getRandomInt(0, 196);
			var green = getRandomInt(100, 256);
			var red = getRandomInt(60, 256);	
			var changedBlock = document.getElementById("numbers" + i);
			function getHeight () {
				var height = parseInt(changedBlock.style.height);
				return height;
			}
			function Gradient () {
				setInterval(getHeight, 200);
				var height = getHeight();
				changedBlock.style.background =  'linear-gradient(' + 'rgb(' + red + ', ' +
				green + ', ' + blue + ')' + ', rgb(' + (green+height) + ', ' +
				(blue + height) + ', ' + red  + '))';
				}
			Gradient();
		}
	}
	
	var RoundBlock = document.getElementById("RoundBlock");
	RoundBlock.onclick = function () {
		cleanOptionsButt();
		document.getElementById("RBlockButt").style.display = "block";
		RBlocksAddColour();
	}
	
	var RBloCleanColours = document.getElementById("RBloCleanColours");
	RBloCleanColours.onclick = function() {
		RBlocksAddColour();
	}
	
	var RBloRandColours = document.getElementById("RBloRandColours");
	RBloRandColours.onclick = function() {
		RBlocksRandColours();
	}
	
	var RBloMoreGrad = document.getElementById("RBloMoreGradient");
	RBloMoreGrad.onclick = function () {
		var FirstColour = createColour();
		var middColour = createColour();
		var middleColour = createColour();
		for (var i = 0; i < RBlocksNumber.length; i++) {
			var changedBlock = document.getElementById("RBlockNumber" + i);
			changedBlock.style.background = "linear-gradient(" + 
				FirstColour + ", " + middColour + ", " + middleColour + ", " + 
				middColour + ", " + FirstColour + ")";;
		}
	}
	
	
	
	var FadCirButt = document.getElementById("FadedCircles");
	FadCirButt.onclick = function () {
		cleanOptionsButt();
		document.getElementById("FadCircButt").style.display = "block";
		CirclesCol();
	}
	
	var FadCircBBorder = document.getElementById("FadCircBBorder");
	FadCircBBorder.onclick = function () {
		CirclesBBorder();
	}
		
	for (var i = 0; i < music.length; i++) (function(i){
		var TrackId = document.getElementById(MusicIDs[i]);
		TrackId.onclick = function () {
			audio.src = music[i];
			audio.play();
		}
	})(i);
	
});
