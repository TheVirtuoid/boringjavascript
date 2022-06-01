onmessage = function(data) {
	console.log('-------global in webworker-------');
	console.log(self);
	console.log('-------globalThis-------');
	console.log(globalThis);

}































// console.log('-------window in webworker-------');
// console.log(window);
/*
console.log('-------self in webworker-------');
console.log(self);
console.log('-------gt in webworker-------');
console.log(globalThis);
*/
