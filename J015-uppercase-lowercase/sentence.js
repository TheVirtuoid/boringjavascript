const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const sentences = loremIpsum.split(".");
let goodSentenceCount = 0;
let badSentences = [];
sentences.forEach( sentence => {
	const checkSentence = sentence.trim();
	if (checkSentence.charAt(0) === checkSentence.charAt(0).toUpperCase()) {
		goodSentenceCount++;
	} else {
		badSentences.push(sentence.trim());
	}
});
console.log(`Number of good sentences: ${goodSentenceCount}`);
console.log(`Number of bad sentences: ${badSentences.length}`);
if (badSentences.length) {
	console.log("\nListing of bad sentences:");
	badSentences.forEach( (sentence, index) => console.log(`${index + 1}: ${sentence}.`));
}
