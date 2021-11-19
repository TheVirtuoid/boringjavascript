class Animal {
	name = '';
	changeName (newName) {
		this.name = newName;
	}

	get nameLength () {
		return this.name.length;
	}
}

const myCat = new Animal();
console.log(`Before we name the cat: ${myCat.nameLength}`);

myCat.changeName('Fluffy');
console.log(`After we name the cat: ${myCat.nameLength}`);

