const sendData = (data) => {
	data.forEach( (record, index) => {
		postMessage({ index, record });
	});
}

fetch('./animals.json')
.then(response => response.json())
.then(data => sendData(data));