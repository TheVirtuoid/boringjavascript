const scoreDom = document.getElementById('score');
const clockDom = document.getElementById('clock');
const statusDom = document.getElementById('status');
const selectionDom = document.getElementById('selection');

const soundEndOfGame = new Audio('end-of-game.wav');
const soundStartCountdown = new Audio('startCountdown.wav');
const soundStartGame = new Audio('startGame.wav');

const blocks = document.querySelectorAll('.block');

let params = {
	score: 0,
	clock: 10,
	clockTimer: null,
	countdown: 5,
	countdownTimer: null,
	currentColor: ""
};
blocks.forEach( block => {
	block.addEventListener('click', processBlockClick.bind(params));
});
printStatus("Click to Start");
statusDom.addEventListener('click', runTheGame.bind(params), {once: true});

function runTheGame(event) {
	statusDom.classList.remove('startGame');
	printStatus(this.countdown);
	soundStartCountdown.play();
	params.countdownTimer = setInterval(countdownInterval, 1000, this);
}

function processBlockClick(event) {
	const color = event.target.classList.value.replace('block', '').trim();
	if (color === params.currentColor) {
		this.score++;
		printScore(this.score);
		setColor();
	}
}

function printScore(score) {
	scoreDom.textContent = score;
}

function printClock(clock) {
	const clockString = clock.toFixed(2);
	clockDom.textContent = `${clockString.length < 5 ? '0' : ''}${clockString}`;
}

function printStatus(status) {
	statusDom.textContent = status;
}

function countdownInterval(params) {
	params.countdown--;
	if (params.countdown === 0) {
		clearInterval(params.countdownTimer);
		soundStartGame.play();
		printStatus("GO!");
		selectionDom.classList.remove('black');
		setColor();
		params.clockTimer = setInterval(clockInterval, 10, params);
	} else {
		soundStartCountdown.play();
		printStatus(params.countdown);
	}
}

function clockInterval(params) {
	params.clock -= .01;
	printClock(params.clock);
	if (params.clock <= 0) {
		soundEndOfGame.play();
		printClock(0);
		clearInterval(params.clockTimer);
		selectionDom.classList.remove(...['red', 'green', 'blue', 'yellow']);
		selectionDom.classList.add('black');
		params.currentColor = "";
		statusDom.textContent = "GAME OVER";
	}
}

function setColor() {
	const options = ['red', 'green', 'blue', 'yellow'];
	const color = options[Math.floor(Math.random() * 4)];
	selectionDom.classList.remove(...options);
	selectionDom.classList.add(color);
	statusDom.textContent = color.toUpperCase();
	params.currentColor = color;
}
