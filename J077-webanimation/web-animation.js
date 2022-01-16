const go = document.getElementById('go');
const reset = document.getElementById('reset');
const cat = document.getElementById('cat');

const range = document.getElementById('range');
const rangeValue = document.getElementById('range-value');

let catAnimation;

const keyFrames = [
	{ marginLeft: 0, offset: 0 },
	{ marginLeft: '40rem', offset: 1 }
];

const timing = {
	duration: 3000,
	easing: 'linear',
	fill: 'forwards'
};


const moveTheCat = () => {
	catAnimation = cat.animate(keyFrames, timing);
};

const resetCat = () => {
	if (catAnimation) {
		catAnimation.cancel();
	}
}

const changeTheValue = () => {
	rangeValue.textContent = range.value;
	timing.duration = parseFloat(range.value) * 1000;
}

go.addEventListener('click', moveTheCat);
reset.addEventListener('click', resetCat);
range.addEventListener('input', changeTheValue);




















/*
const range = document.getElementById('range');
const rangeValue = document.getElementById('range-value');

let catAnimation;

const keyFrames = [
	{ marginLeft: 0, offset: 0 },
	{ marginLeft: '40rem', offset: 1 }
];

const timing = {
	duration: 3000,
	easing: 'linear',
	fill: 'forwards'
};

const moveTheCat = () => {
	// cat.classList.add('move-me');
	catAnimation = cat.animate(keyFrames, timing);
};

const changeTheValue = () => {
	rangeValue.textContent = range.value;
	timing.duration = parseFloat(range.value) * 1000;
}

const resetCat = () => {
	// cat.classList.remove('move-me');
	if (catAnimation) {
		catAnimation.cancel();
	}
}

range.addEventListener('input', changeTheValue);

 */