class CatButton {
	#talking;
	constructor() {
		this.#talking = document.getElementById('talking');
		const button = document.createElement('button');
		button.innerText = "Make Me Talk!"
		this.prepareToTalk();
		button.addEventListener('click', this.processClick.bind(this));
		document.getElementById('button-here').appendChild(button);
	}

	processClick() {
		document.getElementById('talking').innerText = this.toString();
		this.#talking.innerText = 'My Cat Talks!';
	}

	prepareToTalk() {
		this.#talking.innerText = 'Preparing to talk...';
	}
}

new CatButton();

