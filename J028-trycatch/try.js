const a = new Error('This is my error');

try {
	console.log('\nInside the Try')
	throw a
} catch (err) {
	console.log('We have an error!');
	console.log(err);
}
console.log('Completed');