const getYouTubeVideo = (event) => {
	const videoUrl = 'https://youtu.be/L5AuuCttleE';
	fetch(videoUrl, { mode: 'no-cors' })
			.then(processStream)
			.then(allDone)
			.catch(whoops);
}

const allDone = () => {
	console.log('All done!');
}

const whoops = (err) => {
	console.log('I do believe that there has been an error');
	console.log(err);
}

const processStream = (response) => {
	const streamReader = response.body.getReader();

	const processChunk = (chunk) => {
		console.log('got chunk');
		console.log(chunk);
		if (!chunk.done) {
			return streamReader.read()
					.then(processChunk)
					.catch(gotError);
		} else {
			return Promise.resolve(true);
		}
	}

	const gotError = (error) => {
		console.log('GOT ERROR');
		console.log(error);
	}

	streamReader.read()
			.then(processChunk)
			.catch(gotError);

}


const readStream = document.getElementById('read-stream');
readStream.addEventListener('click', getYouTubeVideo);
