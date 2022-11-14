import ValidBase from "./ValidBase.js";

export default class ValidNumeric extends ValidBase {

	constructor(component) {
		super(component);
		if (isNaN(this.value)) {
			this.valid.push(`"value" is not numeric`);
		}
	}
}