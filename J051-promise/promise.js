const boonditResult = document.getElementById('boondit-result');
const skrebertResult = document.getElementById('skrebert-result');
const plunkleResult = document.getElementById('plunkle-result');
const caseResult = document.getElementById('case-result');
const resultGood = document.getElementById('result-good');
const resultBad = document.getElementById('result-bad');
const go = document.getElementById('go');

go.addEventListener('click', doBuild);

function doBuild() {
	const results = { skrebert: false, boondit: false, plunkle: false, woodenCase: false };
	buildSkrebert(results)
			.then(buildBoondit)
			.then(buildPlunkle)
			.then(allDone)
			.catch(mistake)
	buildCase(results);
}

function buildSkrebert(results) {
	return new Promise( (resolve, reject) => {
		const completed = true;
		setTimeout( () => {
			results.skrebert = completed;
			if (completed) {
				mark(skrebertResult, 'good');
				resolve(results);
			} else {
				mark(skrebertResult, 'bad');
				reject(results);
			}
		}, 2000);
	});
}

function buildBoondit(results) {
	return new Promise( (resolve, reject) => {
		const completed = true;
		setTimeout( () => {
			results.boondit = completed;
			if (completed) {
				mark(boonditResult, 'good');
				resolve(results);
			} else {
				mark(boonditResult, 'bad');
				reject(results);
			}
		}, 2000);
	});
}

function buildPlunkle(results) {
	return new Promise( (resolve, reject) => {
		const completed = true;
		setTimeout( () => {
			results.plunkle = completed;
			if (completed) {
				mark(plunkleResult, 'good');
				resolve(results);
			} else {
				mark(plunkleResult, 'bad');
				reject(results);
			}
		}, 2000);
	});
}

function buildCase(results) {
	return new Promise( (resolve, reject) => {
		const completed = true;
		setTimeout( () => {
			results.case = completed;
			if (completed) {
				mark(caseResult, 'good');
				resolve(results);
			} else {
				mark(caseResult, 'bad');
				reject(results);
			}
		}, 5000);
	});
}

function allDone(results) {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			resultBad.classList.add('hide');
			resultGood.classList.remove('hide');
			resolve(true);
		}, 1000);
	});
}

function mistake(err) {
	setTimeout( () => {
		resultBad.classList.remove('hide');
		resultGood.classList.add('hide');
	}, 1000);
}


function mark(dom, result) {
	dom.classList.add(result);
}