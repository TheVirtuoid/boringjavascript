console.log(this);

const myCat = {
	name: 'Fluffy',
	type: 'Cat',
	walk: function () {
		console.log(`FLUFFY: My cat '${this.name}' is walking.`);
		console.log(this);
	}
}

const myOtherCat = {
	name: 'Mr. Tinkles',
	type: 'Cat',
	walk: function () {
		console.log(`My cat '${this.name}' is walking.`);
		console.log(this);
	}
}

const oneMoreCat = {
	name: 'Tom',
	type: 'Cat',
	walk: function () {
		console.log(`My cat '${this.name}' is walking.`);
		console.log(this);
	}
}

myCat.walk();

myCat.walk.apply(myOtherCat);

const tomWalk = myCat.walk.bind(oneMoreCat);

tomWalk();