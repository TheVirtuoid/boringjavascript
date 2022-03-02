export default (number) => {
	let binaryString = '';
	for(let i = 0; i < 32; i++) {
		const overflow = number < 0;
		number = number << 1;
		binaryString = `${binaryString}${overflow ? '1' : '0'}`;
	}
	return binaryString;
}