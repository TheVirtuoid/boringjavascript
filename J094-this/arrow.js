const myCat = {
	name: 'Mr. Tinkles',
	type: 'Cat',
	walk: () => {
		console.log(`\n\nMy cat '${this.name}' is walking.`);
		console.log(this);
	}
}

// myCat.walk();
// myCat.walk.apply(myCat);
// const walkies = myCat.walk.bind(myCat);
// walkies();

const myOtherCat = {
	name: 'Tom',
	type: 'Cat',
	tail: true,
	walk: function() {
		console.log(`My cat ${this.name} is walking!`);
		const doIHaveATail = () => {
			return this.tail ? 'And I have a tail!' : 'I do not have a tail. :( ';
		}
		return doIHaveATail();
	}
}

console.log(myOtherCat.walk());














/*
const myCat = {
	name: 'Mr. Tinkles',
	type: 'Cat',
	walk: () => {
		console.log(`\n\nMy cat '${this.name}' is walking.`);
		console.log(this);
	}
}

// myCat.walk();

// myCat.walk.apply(myCat);
// const walkies = myCat.walk.bind(myCat);
// walkies();

const myOtherCat = {
	name: 'Tom',
	type: 'Cat',
	tail: true,
	walk: function() {
		console.log(`My cat ${this.name} is walking!`);
		const doIHaveATail = () => {
			return this.tail ? 'And I have a tail!' : 'I do not have a tail. :( ';
		}
		return doIHaveATail();
	}
}

console.log(myOtherCat.walk());
*/