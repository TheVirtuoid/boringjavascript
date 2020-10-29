const throwError = true;

try {
	openResource();
	processResource();
} catch (err) {
	console.log(`ERROR: ${err.message}`);
} finally {
	closeResource();
}
console.log('Operation completed\n');










function openResource() {
	console.log('\nresource opened');
}

function processResource() {
	if (throwError) {
		throw new Error('Error occurred during processing');
	}
	console.log('processing resource');
}

function closeResource() {
	console.log('closing resource');
}