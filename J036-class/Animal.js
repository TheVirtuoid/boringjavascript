class Animal {
	constructor () {
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

// export default Animal;
module.exports = Animal;