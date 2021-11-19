class Animal {

	#animalName = '';

	changeName (newName) {
		this.name = newName;
	}

	get nameLength () {
		return this.name.length;
	}

	get name () {
		return this.#animalName;
	}

	set name (newName) {
		this.#animalName = `(${newName})`;
	}
}

const myCat = new Animal();
console.log(`Before we name the cat: ${myCat.nameLength}: ${myCat.name}`);

myCat.changeName('Fluffy');
console.log(`After we name the cat: ${myCat.nameLength}: ${myCat.name}`);

