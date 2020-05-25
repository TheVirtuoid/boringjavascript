function assignmentOperators(text, index) {
	return text + '_' + index;
}

function concatStatement(text, index) {
	return text.concat('_').concat(index);
}

function templateStatement(text, index) {
	return `${text}_${index}`;
}

const loopSize = 10000000;

let one = Date.now();
for (let i = 0; i < loopSize; i++) {
	assignmentOperators("I am Fast!", i);
}
let two = Date.now();
for (let i = 0; i < loopSize; i++) {
	concatStatement("I am Fast!", i);
}
let three = Date.now();
for (let i = 0; i < loopSize; i++) {
	templateStatement("I am Fast!", i);
}
let four = Date.now();
console.log(`
Assignment:\t${two - one} ms
Concat:\t\t${three - two} ms
Template:\t${four - three} ms`
);
