import ValidBase from "./ValidBase.js";

export default class ValidPositiveNumber extends ValidBase {

	constructor(component) {
		super(component);
		if (isNaN(this.value) || this.value <= 0) {
			this.valid.push(`"value" is not a positive number`);
		}
	}

}