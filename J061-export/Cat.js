import Animal from "./Animal.js";

const Cat = class extends Animal {
	constructor(args) {
		args.type = "cat";
		super(args)
	}
}

export { Cat as Feline };