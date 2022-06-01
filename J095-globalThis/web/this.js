console.log('-------window within module-------');
console.log(window);
console.log('-------globalThis-------');
console.log(globalThis);


const myWebWorker = new Worker('webworker.js');
myWebWorker.postMessage('doit!');



































// const myWebWorker = new Worker('webworker.js');
// myWebWorker.postMessage('doit!');



// console.log('-------global-------');
// console.log(global);


