const sayIt = document.getElementById('say-it');
const textToSpeech = document.getElementById('text-to-speech');

const speakTheText = (event) => {
	const utterance = new SpeechSynthesisUtterance(textToSpeech.value);
	speechSynthesis.speak(utterance);
};

console.log(speechSynthesis.getVoices());
sayIt.addEventListener('click', speakTheText);


