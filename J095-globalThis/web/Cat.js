class Cat {
	name;
	domNode;
	buttonNode;

	constructor(name, buttonNode, domNode) {
		this.name = name;
		this.buttonNode = buttonNode;
		this.domNode = domNode;
		this.buttonNode.addEventListener('click', this.walk.bind(this));
	}

	walk(event) {
		console.log(this);
		this.domNode.insertAdjacentHTML('beforeend', `\nMy cat '${this.name}' is walking.`);
	}
}
export default Cat;

