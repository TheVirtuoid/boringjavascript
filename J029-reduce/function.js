function _animal() {
	return class Animal {
		constructor() {
			this.animal = true;
		}
	}
}

const extender = (allParts, part) => {
	console.log(allParts, part);
	return allParts(part);
}

const newAnimal = [_body, _head, _leg, _tail].reduce(extender, _animal);
console.log(newAnimal);




















function _body(Base) {
	return class Body extends Base {
		constructor() {
			super();
			this.body = true;
		}
	}
}

function _leg(Base) {
	return class Leg extends Base {
		constructor(num = 4) {
			super();
			this.legs = num;
		}
	}
}
function _arm(Base) {
	return class Arm extends Base {
		constructor(num = 2) {
			super();
			this.arms = num;
		}
	}
}

function _head(Base) {
	return class Head extends Base {
		constructor() {
			super();
			this.head = true;
		}
	}
}

function _tail(Base) {
	return class Tail extends Base {
		constructor() {
			super();
			this.tail = true;
		}
	}
}
