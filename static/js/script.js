let score = 0;

function scoreCounter() {
    score = score + 1;
	let scoreboard = document.getElementById('score');
	scoreboard.innerHTML = score;
	playSound();
	animateTopaz();
}

var topazAudio = [
	new Audio("static/audio/topaz1.wav"),
	new Audio("static/audio/topaz2.wav"),
	new Audio("static/audio/topaz3.wav"),
	new Audio("static/audio/topaz4.wav"),
	new Audio("static/audio/topaz5.wav"),
	new Audio("static/audio/topaz6.wav")
];
function playSound() {
	var audio;
	var random = Math.floor(Math.random() * 6);
	audio = topazAudio[random].cloneNode();
	audio.play();
}
function animateTopaz () {
	var clicker = document.getElementById("clicker");
    var id = null;

	var random = Math.floor(Math.random() * 2) + 1;
    var elem = document.createElement("img");
    elem.src = `static/images/topaz_stickers/topaz${random}.webp`;
    elem.style.position = "absolute";
    elem.style.right = "-305px";
    elem.style.top = clicker.getClientRects()[0].bottom + scrollY - 305 + "px"
    elem.style.zIndex = "-1";
    document.body.appendChild(elem);

    var pos = -305;
    var limit = window.innerWidth + 305;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
    	if (pos >= limit) {
    	clearInterval(id);
    	elem.remove()
		} else {
    	pos += 15;
    	elem.style.right = pos + 'px'; 
    	}
	}
}
