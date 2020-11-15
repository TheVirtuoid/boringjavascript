class BaseAnimal {
	constructor() {
		this.base = true;
	}
}

const creator = (allAnimalParts, animalPart) => animalPart(allAnimalParts);
const extender = (...parts) => parts.reduce(creator, BaseAnimal);

class Cat extends extender(body, head, tail, legs) {
	constructor() {
		super();
		this.legs = 4;
	}
}

class RoadRunner extends extender(body, head, tail, legs, wings) {
	constructor() {
		super();
		this.legs = 2;
		this.wings = 2;
	}
}


const myCat = new Cat();
console.log(myCat);
const myRoadRunner = new RoadRunner();
console.log(myRoadRunner);

const myArms = new (arms(BaseAnimal));
console.log(myArms);


















function body(Base) {
	class Body extends Base {
		constructor() {
			super();
			this.body = true;
		}
	}
	return Body;
}

function legs(Base) {
	class Legs extends Base {
		constructor(num = 4) {
			super();
			this.legs = num;
		}
	}
	return Legs;
}
function arms(Base) {
	class Arms extends Base {
		constructor(num = 2) {
			super();
			this.arms = num;
		}
	}
	return Arms;
}

function head(Base) {
	class Head extends Base {
		constructor() {
			super();
			this.head = true;
		}
	}
	return Head;
}

function tail(Base) {
	class Tail extends Base {
		constructor() {
			super();
			this.tail = true;
		}
	}
	return Tail;
}

function wings(Base) {
	class Wings extends Base {
		constructor() {
			super();
			this.wings = true;
		}
	}
	return Wings;
}
