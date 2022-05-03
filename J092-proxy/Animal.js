export default class Animal {
	name;
	type;
	classification;
	position;

	constructor(animalArguments = {}) {
		const { name, type, classification } = animalArguments;
		this.name = name;
		this.type = type;
		this.classification = classification;
		this.position = { x: 0, y: 0 };
	};

	moveLeft() {
		this.position.x--;
	}

	moveRight() {
		this.position.x++;
	}

	moveUp() {
		this.position.y--;
	}

	moveDown() {
		this.position.y++;
	}

}