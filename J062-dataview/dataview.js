/* data structure

		type			uint8			1 = cat, 2 = dog, 3 = coyote, 0 = no more;
		namesize	uint8			size of name string
		name			char(x)		the name
		weight		float32		weight of the animal
		age				uint16		age of the animal

 */

import fs from 'fs';
const animals = ['', 'Cat', 'Dog', 'Coyote'];

const fileContents = fs.readFileSync('./zoo.data');
const dataView = new DataView(fileContents.buffer, fileContents.byteOffset, fileContents.length);
let offset = 0;
let animal = getAnimal(dataView, offset);
while (animal.type !== "") {
	console.log(animal);
	offset += 8 + animal.name.length;
	animal = getAnimal(dataView, offset);
}



function getAnimal(view, offset) {
	const type = animals[view.getUint8(offset)];
	const nameLength = view.getUint8(offset + 1);
	const name = getName(view, offset + 2, nameLength);
	const weight = view.getFloat32(offset + 2 + nameLength, true);
	const age = view.getInt16(offset + 6 + nameLength, true);
	return { type, name, weight, age };
}

function getName(view, offset, size) {
	if (size === 0) {
		return "";
	} else {
		offset += view.byteOffset;
		return String.fromCharCode.apply(null, new Uint8Array(view.buffer.slice(offset, offset + size)));
	}
}