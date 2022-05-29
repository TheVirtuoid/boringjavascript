onmessage = function(data) {
	console.log('-------this in webworker-------');
	console.log(this);
	// console.log('-------window in webworker-------');
	// console.log(window);
	console.log('-------self in webworker-------');
	console.log(self);
	console.log('-------gt in webworker-------');
	console.log(globalThis);
}
