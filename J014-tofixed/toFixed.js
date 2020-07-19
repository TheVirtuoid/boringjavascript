function prettyPrint(num) {
	let fixedNumber = num.toFixed(2);
	console.log(`My original was ${num}, and toFixed(2) turn it into: ${fixedNumber}`);
}

prettyPrint(1);
prettyPrint(2.04);
prettyPrint(3.141);
prettyPrint(4.157);
