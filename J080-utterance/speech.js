const sayIt = document.getElementById('say-it');
const textToSpeech = document.getElementById('text-to-speech');
const language = document.getElementById('language');
const pitch = document.getElementById('pitch');
const pitchValue = document.getElementById('pitch-value');
const rate = document.getElementById('rate');
const rateValue = document.getElementById('rate-value');
const voice = document.getElementById('voice');
const volume = document.getElementById('volume');
const volumeValue = document.getElementById('volume-value');

const initialLanguage = document.getElementsByTagName('html')[0].getAttribute('lang');

let languages = new Map();

const changePitchText = (event) => {
	pitchValue.textContent = parseFloat(event.target.value).toFixed(2);
}

const changeRateText = (event) => {
	rateValue.textContent = parseFloat(event.target.value).toFixed(2);
}
const changeVolumeText = (event) => {
	volumeValue.textContent = parseFloat(event.target.value).toFixed(1);
}

const populateVoicesAndLanguage = () => {
	languages.clear();
	speechSynthesis.getVoices().forEach((voice) => {
		const { lang, name } = voice;
		if (!languages.has(lang)) {
			languages.set(lang, []);
		}
		const languagesFromMap = languages.get(lang);
		languages.set(lang, languagesFromMap.concat([voice]));
		// console.log(voice);
	});
	// console.log(languages);
	while(language.firstChild) language.removeChild(language.firstChild);
	languages.forEach((entry, entryIndex) => {
		// console.log(entry, entryIndex);
		const option = document.createElement('option');
		option.setAttribute('value', `${entryIndex}`);
		if (entryIndex === initialLanguage) {
			option.setAttribute('selected', '');
		}
		option.textContent = entryIndex;
		language.appendChild(option);
	});
	selectLanguage(initialLanguage);
}

const selectLanguage = (language) => {
	while(voice.firstChild) voice.removeChild(voice.firstChild);
	languages.get(language).forEach((entry, entryIndex) => {
		const option = document.createElement('option');
		option.setAttribute('value', `${language},${entryIndex}`);
		if (entryIndex === 0) {
			option.setAttribute('selected', '');
		}
		option.textContent = entry.name;
		voice.appendChild(option);
	});
}

const changeLanguage = (event) => {
	const language = event.target.options[event.target.selectedIndex].value;
	selectLanguage(language);
}

/* ---------------------------------- The Good Part of the Code -------------------------- */

const speakTheText = (event) => {
	// const utterance = new SpeechSynthesisUtterance(textToSpeech.value);
	const utterance = getUtterance();
	speechSynthesis.speak(utterance);
};

const getUtterance = () => {
	const utterance = new SpeechSynthesisUtterance(textToSpeech.value);
	utterance.lang = language.options[language.selectedIndex].value;
	utterance.pitch = parseFloat(pitch.value);
	utterance.rate = parseFloat(rate.value);
	const [ languageSelected, index ] = voice.options[voice.selectedIndex].value.split(',');
	utterance.voice = languages.get(languageSelected)[index];
	utterance.volume = parseFloat(volume.value);
	return utterance;
}

sayIt.addEventListener('click', speakTheText);
pitch.addEventListener('input', changePitchText);
rate.addEventListener('input', changeRateText);
language.addEventListener('input', changeLanguage);
volume.addEventListener('input', changeVolumeText);

speechSynthesis.addEventListener('voiceschanged', populateVoicesAndLanguage);



