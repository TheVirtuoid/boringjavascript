console.log('-------window within module-------');
console.log(window);
console.log('-------this within module-------');
console.log(this);
// console.log('-------global-------');
// console.log(global);

const myWebWorker = new Worker('webworker.js');
myWebWorker.postMessage('doit!');


