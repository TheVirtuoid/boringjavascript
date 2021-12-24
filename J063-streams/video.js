const getVideo = (event) => {
	video.src = URL.createObjectURL(mediaSource);
	mediaSource.addEventListener('sourceopen', () => {
		console.log(mediaSource.readyState);
		sourceBuffer = mediaSource.addSourceBuffer(codec);
		fetch(videoUrl)
				.then(processStream)
				.then(allDone)
				.catch(whoops);
	});
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
				destinationBuffer = appendBuffers(destinationBuffer, chunk.value.buffer);
				// await appendBuffer(chunk.value.buffer);
				if (chunkCount % 100 === 0) {
					console.log(mediaSource.readyState);
					output(resultsData, chunkCount, fileSize);
				}
				chunk = await streamReader.read();
			}
			output(resultsData, chunkCount, fileSize);
			console.log('---before');
			console.log(mediaSource.readyState);
			await appendBuffer(destinationBuffer);
			console.log('----after');
			console.log(mediaSource.readyState);
			mediaSource.endOfStream();
			video.play();
			resolve({ chunkCount, fileSize });
		} catch (err) {
			reject(err);
		}
	});
}

const appendBuffer = (buffer) => {
	return new Promise( async (resolve, reject) => {
		sourceBuffer.addEventListener('updateend', () => {
			console.log('-----done');
			mediaSource.endOfStream();
			video.play();
			resolve(true);
		}, { once: true });
		try {
			sourceBuffer.appendBuffer(buffer);
		} catch (err) {
			console.log(err);
		}
	});
}

const output = (resultsData, chunkNumber, fileSize) => {
	const tr = document.createElement('tr');
	let td = document.createElement('td');
	td.textContent = chunkNumber;
	tr.appendChild(td);
	td = document.createElement('td');
	td.textContent = fileSize;
	tr.appendChild(td);
	resultsData.appendChild(tr);
}

const appendBuffers = (buffer1, buffer2) => {
	if (!buffer1) {
		return new Uint8Array(buffer2);
	}
	const tempBuffer = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
	tempBuffer.set(buffer1, 0);
	tempBuffer.set(buffer2, buffer1.byteLength);
	return tempBuffer;
};

const resultsData = document.querySelector('#results table tbody');
const readStream = document.getElementById('read-stream');
const video = document.getElementById('video');
const codec = `video/mp4; codecs="avc1.42E01E, mp4a.40.2"`;
const mediaSource = new MediaSource();
const videoUrl = 'J062-dataview-f.mp4';
let sourceBuffer = null;
let destinationBuffer = null;
readStream.addEventListener('click', getVideo);