export default class Animal {
	static TYPES = ['', 'Cat', 'Dog', 'Coyote'];

	type = '';
	name = '';
	weight = 0;
	age = 0;


	constructor(view, offset) {
		const type = view.getUint8(offset);
		this.type = Animal.TYPES[type];
		const nameLength = view.getUint8(offset + 1);
		this.name = getName(offset + 2, nameLength);
		this.weight = view.getFloat32(offset + 2 + nameLength, true);
		this.age = view.getInt16(offset + 6 + nameLength, true);

		function getName(offset, length) {
			if (length === 0) {
				return "";
			} else {
				offset += view.byteOffset;
				return String.fromCharCode.apply(null, new Uint8Array(view.buffer.slice(offset, offset + length)));
			}
		}
	}

	get size () {
		return 1 + 1 + this.name.length + 4 + 2;	// Bytes (type + sizeOfName + nameLength + weight + age)
	}
}