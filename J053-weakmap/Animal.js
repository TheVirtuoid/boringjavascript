const privateMap = new WeakMap()

export default class Animal {
	name;
	age;

	constructor (name, age) {
		this.name = name;
		this.age = age;
		privateMap.set(this, { randomAge: Math.floor(Math.random() * 10) });
	}

	getNewAge() {
		return this.age + privateMap.get(this).randomAge;
	}

	static get mapSize () {
		return privateMap.size;
	}
}