try {
	console.log('\nInside the Try');
	const a = 1;
	a = 2;
} catch (err) {
	console.log('We have an error!');
	console.log(`The error message is: ${err.message}`);
	console.log(err);
}
console.log('Completed\n');
