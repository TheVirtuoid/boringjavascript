const myVar = 1;

(function () {
	const myVar = 2;
	innerFunction();
	console.log(`scoped myVar = ${myVar}`);

	function innerFunction () {
		const myVar = 3;
		console.log(`innerFunction start myVar = ${myVar}`);
		if (myVar === 3) {
			const myVar = 4;
			console.log(`innerFunction inside if myVar = ${myVar}`);
		}
		console.log(`innerFunction end myVar = ${myVar}`);
	}
})()

console.log(`global myVar = ${myVar}`);

/*
const myVar = "Cat";
console.log(`global myVar (2) = ${myVar}`);
*/


