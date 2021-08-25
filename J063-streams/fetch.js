const getYouTubeVideo = (event) => {
	const videoUrl = 'J011-await.mp4';
	fetch(videoUrl)
			.then(processStream)
			.then(allDone)
			.catch(whoops);
}

const allDone = (stats) => {
	console.log('All done!');
	console.log(`Chunk: ${stats.chunkCount}, Size: ${stats.fileSize}`);
}

const whoops = (err) => {
	console.log('I do believe that there has been an error');
	console.log(err);
}

const processStream = (response) => {
	const videoLength = response.headers.get('content-length');
	return new Promise( async (resolve, reject) => {
		try {
			const streamReader = response.body.getReader();
			let chunkCount = 0;
			let fileSize = 0;
			let chunk = await streamReader.read();
			while (!chunk.done) {
				chunkCount++;
				fileSize += chunk.value.length;
				chunk = await streamReader.read();
			}
			resolve({ chunkCount, fileSize });
		} catch (err) {
			reject(err);
		}
	});
}


const readStream = document.getElementById('read-stream');
readStream.addEventListener('click', getYouTubeVideo);
