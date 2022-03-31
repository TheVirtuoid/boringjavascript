const { performance } = require('perf_hooks');

const original = 'abcdefghijklmnopqrstuvwxyz'

performance.mark('A');
for(let x = 0; x < 100000; x++) {
	const array = original.split('');
	let index = array.length;
	while (index > 0) {
		const item = Math.floor(Math.random() * index);
		array.push(array.splice(item, 1)[0]);
		index--;
	}
}
performance.mark('B');
const pushSplice = performance.measure('Push/Splice Randomizer', 'A', 'B');
console.log(pushSplice);



performance.mark('C');
for(let x = 0; x < 100000; x++) {
	const array = original.split('');
	let index = array.length;
	const lastItemIndex = array.length - 1;
	while (index > 0) {
		const item = Math.floor(Math.random() * index);
		array.length++;
		array.copyWithin(lastItemIndex, item, item + 1);
		array.splice(item, 1);
		index--;
	}
}
performance.mark('D');
const copyWithinSplice = performance.measure('CopyWithin/Splice Randomizer', 'C', 'D');
console.log(copyWithinSplice);

