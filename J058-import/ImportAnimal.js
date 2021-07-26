export default class Animal {
	name = "";
	type = "";
	constructor(args) {
		const { name, type } = args;
		this.name = name;
		this.type = type;
	}

	toSuperString () {
		return `The animal's name is "${this.name}", and its type is a "${this.type}."`;
	}
}