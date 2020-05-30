var myVar = 1;

(function () {
	var myVar = 2;
	innerFunction();
	console.log(`scoped myVar = ${myVar}`);

	function innerFunction () {
		var myVar = 3;
		console.log(`innerFunction start myVar = ${myVar}`);
		if (myVar === 3) {
			var myVar = 4;
			console.log(`innerFunction inside if myVar = ${myVar}`);
		}
		console.log(`innerFunction end myVar = ${myVar}`);
	}


})()

console.log(`global myVar = ${myVar}`);

/*
var myVar = "Cat";
console.log(`global myVar (2) = ${myVar}`);
*/
