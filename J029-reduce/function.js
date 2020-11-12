class Base {
	constructor() {
		this.base = true;
	}
}
const extender = (allParts, part) => part(allParts);


class Animal extends [_head, _leg, _tail].reduce(extender, Base) {
	constructor() {
		super();
		this.animal = true;
	}
}


class Human extends [_head, _leg, _tail, _arm].reduce(extender, Base) {
	constructor() {
		super();
		this.human = true;
		this.legs = 2;
	}
}


const newAnimal = new Animal();
console.log(newAnimal);

const newHuman = new Human();
console.log(newHuman);
console.log(newAnimal);



















function _body(Base) {
	class Body extends Base {
		constructor() {
			super();
			this.body = true;
		}
	}
	return Body;
}

function _leg(Base) {
	class Leg extends Base {
		constructor(num = 4) {
			super();
			this.legs = num;
		}
	}
	return Leg;
}
function _arm(Base) {
	class Arm extends Base {
		constructor(num = 2) {
			super();
			this.arms = num;
		}
	}
	return Arm;
}

function _head(Base) {
	class Head extends Base {
		constructor() {
			super();
			this.head = true;
		}
	}
	return Head;
}

function _tail(Base) {
	class Tail extends Base {
		constructor() {
			super();
			this.tail = true;
		}
	}
	return Tail;
}
