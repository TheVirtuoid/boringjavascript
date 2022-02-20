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
				characterCodes.split(',').map((code) => parseInt(code, 16))
		);
		outputTextEncoder.textContent = textDecoder.decode(values);
	}
}

const processCharacters = () => {
	console.log('noting');
}

buttonTextEncoder.addEventListener('click', processCharacterCodes);
buttonTextDecoder.addEventListener('click', processCharacters);




document.getElementById('doit').addEventListener('click', () => {
	const decoder = new TextDecoder();
	fetch("http://localhost:8080/utf8-sampler.utf8")
			.then(async response => {
				const reader = response.body.getReader();
				let { value: chunk, done: readerDone } = await reader.read();
				return Promise.resolve(String.fromCodePoint(...chunk));
				// return decoder.decode(chunk);
			})
			.then(data => console.log(data));
})




// https://kermitproject.org/utf8.html

// a2+b2+c2 BAD:  61,B2,2B,62,B2,3D,63,B2
// a2+b2=c2 GOOD: 61,C2,B2,2B,62,C2,B2,3D,63,C2,B2




// a2+b2=c2: 97,178,43,98,178,61,99,178















// kon;nichiwa: 12371,12435,12395,12385,12399

















// zombie eat brain turn into clown? 129503,129504,61,129313,63






