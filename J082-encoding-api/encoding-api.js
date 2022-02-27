const inputCharacterCodes = document.getElementById('character-codes');
const inputCharacters = document.getElementById('characters');
const buttonTextEncoder = document.getElementById('button-text-encoder');
const buttonTextDecoder = document.getElementById('button-text-decoder');
const outputTextEncoder = document.getElementById('output-text-encoder');
const outputTextDecoder = document.getElementById('output-text-decoder');

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

const processCharacterCodes = () => {
	const characterCodes = inputCharacterCodes.value;
	if (characterCodes) {
		const values = new Uint8Array(
				characterCodes.split(',').map((code) => parseInt(code, 10))
		);
		outputTextDecoder.textContent = textDecoder.decode(values);
	}
}

const processCharacters = () => {
	const characters = inputCharacters.value;
	if (characters) {
		outputTextEncoder.textContent = textEncoder.encode(characters).join(',');
	}
}

buttonTextDecoder.addEventListener('click', processCharacterCodes);
buttonTextEncoder.addEventListener('click', processCharacters);






// a2+b2=c2:
// BAD: 97,178,43,98,178,61,99,178
// GOOD: 97,194,178,43,98,194,178,61,99,194,178







// kon;nichiwa:
// BAD: 12371,12435,12395,12385,12399
// GOOD: 227,129,147,227,130,147,227,129,171,227,129,161,227,129,175







// 🧟🧠=🤡?

