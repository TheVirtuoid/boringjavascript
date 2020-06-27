module.exports = function displayAnimals(header, animals) {
	const text = `\n${header}\n${animals.join(', ')}`;
	console.log(text);
}
