export default (number) => {
	const header = '31      24        16        8         0\n|       |         |         |         |\n';
	const binary = (number >>> 0).toString(2).padStart(32, '0');
	let returnString = "";
	for(let i = 0; i < 32; i+=4 ) {
		returnString = `${returnString}${binary.substring(i, i + 4)} `;
	}
	return `${header}${returnString}`;
}