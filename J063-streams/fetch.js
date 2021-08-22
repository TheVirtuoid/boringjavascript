const getYouTubeVideo = (event) => {
	const videoUrl = 'https://youtu.be/L5AuuCttleE';
	fetch(videoUrl)
			.then(processStream)
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
