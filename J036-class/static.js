class Animal {
	static TYPES = {
		cat: 0,
		dog: 1,
		horse: 2,
		cow: 3,
		coyote: 4,
		"road-runner": 5,
		dolphin: 6,
		whale: 7,
		lizard: 8
	}

	static validType = function (type) {
		return Animal.TYPES[type] !== undefined;
	}

	constructor (type) {
		if (!Animal.validType(type)) {
			throw(new Error(`You cannot have a type of ${type}`));
		}
		this.head = true;
		this.body = true;
		this.legs = 0;
		this.arms = 0;
		this.alive = false;
	}

	born () {
		this.alive = true;
	}
}

const myCat = new Animal('cat');
console.log("\n\n", myCat, "\n\n");
const myHorse = new Animal('horse');
const myRoadRunner = new Animal('road-runner');
const myDinosaur = new Animal('dinosaur');