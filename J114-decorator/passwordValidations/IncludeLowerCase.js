import ValidPasswordBase from "./ValidPasswordBase.js";
import passwordSettings from './settings.js';

export default class IncludeLowerCase extends ValidPasswordBase {

	constructor(component) {
		super(component);
		if (passwordSettings.includeLowerCase) {
			if (!this.value.match(/[a-z]/)) {
				this.valid.push(`The password must contain at least one lowercase character.`);
			}
		}
	}
}