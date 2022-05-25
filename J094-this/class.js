class Cat {
	name;

	constructor(name) {
		this.name = name;
	}

	walk() {
		console.log(`\nMy cat '${this.name}' is walking.`);
		console.log(`'this' for the above object:`);
		console.log(this);
	}

}

class Tomcat extends Cat {
	tail;

	constructor(name, tail) {
		super(name);
		this.tail = tail;
	}

	walk() {
		super.walk();
		console.log(this.tail ? 'And I have a tail!' : 'But I do not have a tail.');
	}
}

const tomcat = new Tomcat('Jerry', true);
tomcat.walk();








/*

const myOtherCat = new Cat('Mr. Tinkles');
myOtherCat.walk();

myCat.walk.apply(myOtherCat);

class Tomcat extends Cat {
	tail;

	constructor(name, tail) {
		super(name);
		this.tail = tail;
	}

	walk() {
		super.walk();
		// console.log(this.tail ? 'And I have a tail!' : 'But I do not have a tail.');
		const tailText = () => this.tail ? 'And I have a tail!' : 'But I do not have a tail.';
		console.log(tailText());
	}
}

const tomcat = new Tomcat('Jerry', true);
tomcat.walk();
*/

/*
myCat.walk.apply(tomcat);

const tomwalk = myCat.walk.bind(tomcat);
tomwalk();
*/

