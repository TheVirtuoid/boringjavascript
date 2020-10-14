const diceEquationDom = document.getElementById('diceEquation');
const dieDom = document.getElementById('die');
const resultDom = document.getElementById('result');
const diceRoll = new Audio('dice-rolling.wav');

dieDom.addEventListener('click', processEquation);

function processEquation () {
	const dice = diceEquationDom.value.toLowerCase();
	if (dice === "") {
		resultDom.textContent = "* Type something in *";
		return;
	}
	const parts = dice.split('d');
	if (parts.length !== 2) {
		resultDom.textContent = "* The Format is #d# *";
		return;
	}
	const numDice = parseInt(parts[0], 10);
	const sizeDice = parseInt(parts[1], 10);
	if (isNaN(numDice) || isNaN(sizeDice)) {
		resultDom.textContent = "* The Format is #d# *";
		return;
	}
	resultDom.textContent = "* rolling dice *";
	dieDom.classList.add('rotate');
	diceRoll.play();
	setTimeout( () => {getResult(numDice, sizeDice)}, 4000);
}

function getResult(numDice, sizeDice) {
	dieDom.classList.remove('rotate');
	let result = 0;
	for (let d = 0; d < numDice ; d++) {
		result += Math.ceil(Math.random() * sizeDice);
	}
	resultDom.textContent = result.toString();
}
