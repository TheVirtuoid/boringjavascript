const text = `
Thus conscience doth make cowards of us all,
And thus the native hue of resolution
Is sicklied o'er with the pale cast of thought,
And enterprises of great pith and moment
With this regard their currents turn awry
And lose the name of action.`;

const searchText = /[Aa]nd/g;
const replaceText = "therefore";

const returnStringWithCase = (match, offset, string) => {
	let capitalizedString = replaceText;
	if (match[0].toUpperCase() === match[0]) {
		capitalizedString = `${capitalizedString[0].toUpperCase()}${capitalizedString.slice(1)}`;
	}
	return capitalizedString;
}

const newText = text.replaceAll(searchText, returnStringWithCase);

console.log(newText);





