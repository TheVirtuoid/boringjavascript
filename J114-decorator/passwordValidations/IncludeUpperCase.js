import ValidPasswordBase from "./ValidPasswordBase.js";
import passwordSettings from './settings.js';

export default class IncludeUpperCase extends ValidPasswordBase {

	constructor(component) {
		super(component);
		if (passwordSettings.includeUpperCase) {
			if (!this.value.match(/[A-Z]/)) {
				this.valid.push(`The password must contain at least one uppercase character.`);
			}
		}
	}
}