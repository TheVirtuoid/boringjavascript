import Animal from "./Animal.js";

export default class Cat extends Animal {
	constructor(args) {
		super(args);
		this.type = 'cat';
		console.log('-----imported cat');
	}
}