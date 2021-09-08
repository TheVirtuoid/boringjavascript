/* data structure

		type			uint8			1 = cat, 2 = dog, 3 = coyote, 0 = no more;
		namesize	uint8			size of name string
		name			char(x)		the name
		weight		float32		weight of the animal
		age				int16			age of the animal

 */

import fs from 'fs';
import Animal from "./Animal.js";
const fileContents = fs.readFileSync('./zoo.data');
console.log(`\nName\tType\tWeight\t\t\tAge`);
console.log(`----\t----\t------\t\t\t---`);
const dataView = new DataView(fileContents.buffer, fileContents.byteOffset, fileContents.length);
let offset = 0;
let animal = new Animal(dataView, offset);
while (animal.type !== "") {
	console.log(`${animal.name}\t${animal.type}\t${animal.weight}\t${animal.age}`);
	offset += animal.size;
	animal = new Animal(dataView, offset);
}
