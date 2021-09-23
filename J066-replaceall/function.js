const text = `
Thus conscience doth make cowards of us all,
And thus the native hue of resolution
Is sicklied o'er with the pale cast of thought,
And enterprises of great pith and moment
With this regard their currents turn awry
And lose the name of action.`

const searchText = /[Aa]nd/g;
const replaceText = "therefore";

const returnStringWithCase = (match, parameter1, offset, string) => {
	const [firstMatchCharacter] = match;
	let capitalizedString = replaceText;
	if (match && match[0].toUpperCase() === match[0]) {
		const [firstCharacter, ...restOfCharacters] = replaceText;
		capitalizedString = [firstCharacter.toUpperCase(), ...restOfCharacters].join('');
	}
	return capitalizedString;
}

const newText = text.replaceAll(searchText, returnStringWithCase);

console.log(newText);





