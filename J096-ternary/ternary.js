const myCat = {
	name: 'Fluffy',
	type: 'Cat',
	classification: 'Mammalia'
}

let isCat;

if (myCat.type === 'Cat') {
	isCat = true;
} else {
	isCat = false;
}

let output = "Do I have a cat? ";
if (isCat) {
	output += "Yes!";
} else {
	output += "No!";
}

console.log(output);


/*

const isCat = myCat.type === 'Cat' ? true : false;
const output = `Do I have a cat? ${isCat ? 'Yes!' : 'No!'}`;
console.log(output);

*/
