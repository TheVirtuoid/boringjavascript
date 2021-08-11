import Animal from "./Animal.js";

export default class Whale extends Animal {
	constructor(args) {
		super(args);
		this.type = 'whale';
		console.log('-----imported whale');
	}
}