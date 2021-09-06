const getVideo = (event) => {
	const videoUrl = 'J062-dataview.mp4';
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
				if (chunkCount % 100 === 0) {
					output(resultsData, chunkCount, fileSize);
				}
				chunk = await streamReader.read();
			}
			output(resultsData, chunkCount, fileSize);
			resolve({ chunkCount, fileSize });
		} catch (err) {
			reject(err);
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

const resultsData = document.querySelector('#results table tbody');
const readStream = document.getElementById('read-stream');
readStream.addEventListener('click', getVideo);