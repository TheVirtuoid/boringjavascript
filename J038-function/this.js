const animal = {
	head: true,
	tail: true,
	alive: false,
	moving: false,

	born: function () {
		console.log('born');
		console.log(this);
		this.alive = true;
	},

	walk: () => {
		console.log('walk');
		console.log(this);
		this.moving = true;
	},

	ambulate: function (callback) {
		console.log('in ambulate');
		console.log(this);
		callback()
	}

}

animal.born();
animal.walk();
animal.ambulate( () => {
	console.log('ambulate');
	console.log(this);
});