export default (number) => {
	const header = '31      24        16        8         0\n|       |         |         |         |\n';
	const binary = number.toString(2);
	const negative = number < 0;
	const fullBinary = negative ? binary.substring(1).padStart(32, '0') : binary.padStart(32, '0');
	let returnString = "";
	for(let i = 0; i < 32; i+=4 ) {
		returnString = `${returnString}${fullBinary.substring(i, i + 4)} `;
	}
	return `${header}${returnString}`;
}