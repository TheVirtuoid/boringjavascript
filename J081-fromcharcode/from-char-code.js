const printCharCodes = document.getElementById('print-char-codes');
const printPointCodes = document.getElementById('print-point-codes');
const charCodes = document.getElementById('char-codes');
const pointCodes = document.getElementById('point-codes');
const outputFromCharCodes = document.getElementById('output-from-char-code').querySelector('span');

const processCharCodes = (event) => {
	const inputCodes = charCodes.value;
	if(inputCodes) {
		const values = inputCodes.split(',').map((code) => parseInt(code));
		outputFromCharCodes.textContent = String.fromCharCode(...values);
	}
};

const processCodePoints = (event) => {
	const inputCodes = pointCodes.value;
	if(inputCodes) {
		const values = inputCodes.split(',').map((code) => parseInt(code));
		outputFromCharCodes.textContent = String.fromCodePoint(...values);
	}
};

printCharCodes.addEventListener('click', processCharCodes);
printPointCodes.addEventListener('click', processCodePoints);
















// a2+b2=c2: 97,178,43,98,178,61,99,178















// kon;nichiwa: 12371,12435,12395,12385,12399

















// zombie eat brain turn into clown? 129503,129504,61,129313,63






