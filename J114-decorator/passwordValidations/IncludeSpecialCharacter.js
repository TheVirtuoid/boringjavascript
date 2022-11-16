import ValidPasswordBase from "./ValidPasswordBase.js";
import passwordSettings from './settings.js';

export default class IncludeSpecialCharacter extends ValidPasswordBase {

	constructor(component) {
		super(component);
		if (passwordSettings.includeSpecialCharacter) {
			if (!this.value.match(/[!@#$%^&*()]/)) {
				this.valid.push(`The password must contain at one of these characters: "!@#$%^&*()".`);
			}
		}
	}
}