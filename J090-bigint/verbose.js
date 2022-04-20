const verbose = (bigIntNumber) => {
	const thousandStrings = [
			'',
			'thousands',
			'millions',
			'billions',
			'trillions',
			'quadrillions',
			'quintillions',
			'sextillions',
			'septillions',
			'octillions',
			'nonillions',
			'decillions',
			'too big for me to worry about-illions'
	];
	let fullString = '';
	let index = 0;
	let number = bigIntNumber.toString();
	while (number.length >= 3) {
		fullString = `${number.slice(-3)} ${thousandStrings[index]}\n${fullString}`;
		number = number.substring(0, number.length - 3);
		index++;
	}
	fullString = `${number.slice(number.length - 3)} ${thousandStrings[index]}\n${fullString}`;
	return fullString;
}

export { verbose }