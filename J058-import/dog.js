import Animal from "./Animal.js";

export default class Dog extends Animal {
	constructor(args) {
		super(args);
		this.type = 'dog';
		console.log('-----imported dog');
	}
}