const a = new Error('This is my custom error!');

try {
	console.log('\nInside the Try');
	throw a;
} catch (err) {
	console.log('We have an error!');
	console.log(`The error message is: ${err.message}`);
}
console.log('Completed\n');









