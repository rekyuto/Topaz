let score = 0;

function scoreCounter() {
    score = score + 1;
	let scoreboard = document.getElementById('score');
	scoreboard.innerHTML = score;
	playAudio();
}

var topazAudio = [
	new Audio("static/audio/topaz1.wav"),
	new Audio("static/audio/topaz2.wav"),
	new Audio("static/audio/topaz3.wav"),
	new Audio("static/audio/topaz4.wav"),
	new Audio("static/audio/topaz5.wav"),
	new Audio("static/audio/topaz6.wav")
];
function playAudio() {
	var audio;
	var random = Math.floor(Math.random() * 6);
	audio = topazAudio[random].cloneNode();
	audio.play();
}