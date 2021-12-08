class Animal {

	name = '';
	#statistics = {
		tempF: 0,
		height: 0,
		weight: 0,
		tempC: 0
	}

	set tempF (tempF) {
		this.#statistics.tempF = tempF;
		this.#statistics.tempC = (tempF - 32) * 5 / 9;
	}

	set height (height) {
		this.#statistics.height = height;
	}

	set weight (weight) {
		this.#statistics.weight = weight;
	}

	get stats () {
		return this.#statistics;
	}

}

const myCat = new Animal();
myCat.name = "Fluffy";
myCat.tempF = 101.7;
myCat.height = 9.1;
myCat.weight = 7.9;

const stats = myCat.stats;

console.log(`
${myCat.name}'s Stats:
    TempF:  ${stats.tempF}
    TempC:  ${stats.tempC}
    Height: ${stats.height}
    Weight: ${stats.weight}
`)

