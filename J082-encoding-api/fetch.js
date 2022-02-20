const buttonFetch = document.getElementById('button-fetch');
const fetchedText = document.getElementById('fetched-text');

const fetchTheFile = () => {
	const decoder = new TextDecoder();
	fetch("http://localhost:8080/utf8-sampler.utf8")
			.then(response => response.text())
			.then(data => {
				fetchedText.textContent = data;
			});
}



buttonFetch.addEventListener('click', fetchTheFile);









/*

const fetchTheFile = () => {
	fetch("http://localhost:8080/utf8-sampler.utf8")
			.then(async response => {
				const reader = response.body.getReader();
				let { value: chunk, done: readerDone } = await reader.read();
				return Promise.resolve(String.fromCodePoint(...chunk));
			})
			.then(data => {
				fetchedText.textContent = data;
			});
}

 */



/*

const fetchTheFile = () => {
	const decoder = new TextDecoder();
	fetch("http://localhost:8080/utf8-sampler.utf8")
			.then(async response => {
				const reader = response.body.getReader();
				let { value: chunk, done: readerDone } = await reader.read();
				return decoder.decode(chunk);
			})
			.then(data => {
				fetchedText.textContent = data;
			});
}

 */



/*

const fetchTheFile = () => {
	const decoder = new TextDecoder();
	fetch("http://localhost:8080/utf8-sampler.utf8")
			.then(response => response.text()
			.then(data => {
				fetchedText.textContent = data;
			});
}

 */