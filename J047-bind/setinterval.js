class Zoo {
	animals = [
		{ type: "Cat", name: "Fluffy" },
		{ type: "Dog", name: "Fido" },
		{ type: "Horse", name: "Mr. Ed" },
		{ type: "Cow", name: "Betsy" },
		{ type: "Coyote", name: "Wile E." },
		{ type: "Road Runner", name: "Beep Beep" },
		{ type: "Dolphin", name: "Flipper" },
		{ type: "Whale", name: "Moby Dick" },
		{ type: "Lizard", name: "Larry" }
	];
	timer;
	count = 0;

	getAnimalName(animalType) {
		const animal =  this.animals.find( animal => animal.type === animalType);
		return animal.name;
	}

	showRandomAnimals() {
		this.count = 10;
		// this.timer = setInterval(this.getRandomAnimal, 1000)
		this.timer = setInterval(this.getRandomAnimal.bind(this), 1000)
	}

	getRandomAnimal () {
		const animalNumber = Math.floor(Math.random() * this.animals.length);
		const animal = this.animals[animalNumber];
		console.log(`The name of the Zoo ${animal.type} is ${animal.name}.`);
		this.count--;
		if (this.count === 0) {
			clearInterval(this.timer);
		}
	}
}

const myZoo = new Zoo();
console.log(`\nThe name of my Personal Cat is ${myZoo.getAnimalName('Cat')}.\n`);
myZoo.showRandomAnimals();
























// 		this.timer = setInterval(this.getRandomAnimal.bind(this), 1000)