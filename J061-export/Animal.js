export default class Animal {
	name = "";
	type = "";
	age = 0;
	constructor(args) {
		const { name, type } = args;
		this.name = name;
		this.type = type;
		this.age = Math.floor(Math.random() * 10) + 2;
	}

	toSuperString () {
		return `The animal's name is "${this.name}", it's type is a "${this.type}", and it's age is ${this.age} years old.`;
	}
}