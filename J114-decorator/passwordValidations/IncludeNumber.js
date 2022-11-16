import ValidPasswordBase from "./ValidPasswordBase.js";
import passwordSettings from './settings.js';

export default class IncludeNumber extends ValidPasswordBase {

	constructor(component) {
		super(component);
		if (passwordSettings.includeNumber) {
			if (!this.value.match(/[0-9]/)) {
				this.valid.push(`The password must contain at least one number character.`);
			}
		}
	}
}