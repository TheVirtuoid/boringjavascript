import ValidPasswordBase from "./ValidPasswordBase.js";
import passwordSettings from './settings.js';

export default class MaximumCharacters extends ValidPasswordBase {

	constructor(component) {
		super(component);
		if (this.value.length > passwordSettings.maximumCharacters) {
			this.valid.push(`No more than ${passwordSettings.maximumCharacters} characters are allowed.`);
		}
	}

}