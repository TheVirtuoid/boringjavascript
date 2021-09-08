/* data structure

		type			uint8			1 = cat, 2 = dog, 3 = coyote, 0 = no more;
		namesize	uint8			size of name string
		name			char(x)		the name
		weight		float32		weight of the animal
		age				uint16		age of the animal

 */

import fs from 'fs';

fs.writeFileSync('./zoo.data', setAnimal("Fluffy", 1), { flag: "w" });
fs.writeFileSync('./zoo.data', setAnimal("Fido", 2), { flag: "a" });
fs.writeFileSync('./zoo.data', setAnimal("Wile E.", 3), { flag: "a" });
fs.writeFileSync('./zoo.data', setAnimal("", 0), { flag: "a" });

function setAnimal(name, type) {
	const nameLength = name.length;
	const animal = new ArrayBuffer(8 + nameLength);
	const view = new DataView(animal);
	if (type === 0) {
		view.setBigUint64(0, 0n, true);
	} else {
		view.setUint8(0, type);
		view.setUint8(1, nameLength);
		for (let i = 0, l = nameLength; i < l; i++) {
			view.setUint8(i + 2, name.charCodeAt(i));
		}
		view.setFloat32(2 + nameLength, Math.random() * 50, true);
		view.setUint16(6 + nameLength, Math.ceil(Math.random() * 10), true);
	}
	return view;
}

