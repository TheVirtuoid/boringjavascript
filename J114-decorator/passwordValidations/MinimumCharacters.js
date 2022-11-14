import passwordSettings from './settings.js';
import ValidPasswordBase from "./ValidPasswordBase.js";

export default class MinimumCharacters extends ValidPasswordBase{

	constructor(component) {
		super(component);
		if (this.value.length < passwordSettings.minimumCharacters) {
			this.valid.push(`Must be a minimum of ${passwordSettings.minimumCharacters} characters.`);
		}
	}
}