let score = 0;
function scoreCounter() {
    score = score + 1
	let scoreboard = document.getElementById('score');
	scoreboard.innerHTML = score;
}