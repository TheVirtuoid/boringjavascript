const animalsCollection = [
	{ "type": "Cat", "name": "Fluffy" },
	{ "type": "Dog", "name": "Fido" },
	{ "type": "Horse", "name": "Mr. Ed" },
	{ "type": "Cow", "name": "Betsy" },
	{ "type": "Coyote", "name": "Wile E." },
	{ "type": "Road Runner", "name": "Beep Beep" },
	{ "type": "Dolphin", "name": "Flipper" },
	{ "type": "Whale", "name": "Moby Dick" },
	{ "type": "Lizard", "name": "Larry" },

	{ "type": "Aardvark", "name": "Archy" },
	{ "type": "Badger", "name": "Bob" },
	{ "type": "Camel", "name": "Smokes" },
	{ "type": "Deer", "name": "Bambi" },
	{ "type": "Eagle", "name": "Legal" },
	{ "type": "Flounder", "name": "Fishy" },
	{ "type": "Goat", "name": "Brady" },
	{ "type": "Horsefly", "name": "Ed-Nemesis" },
	{ "type": "Iguana", "name": "Ickthy" },

	{ "type": "Jaguar", "name": "Jerry" },
	{ "type": "Koala", "name": "Karl" },
	{ "type": "Ladybug", "name": "Lucy" },
	{ "type": "Manatee", "name": "Mary" },
	{ "type": "Newt", "name": "Neil" },
	{ "type": "Oyster", "name": "Olivia" },
	{ "type": "Pig", "name": "Porky" },
	{ "type": "Quail", "name": "Hollow" },
	{ "type": "Rabbit", "name": "Randi" },

	{ "type": "Sardine", "name": "Sam" },
	{ "type": "Thrush", "name": "Tina" },
	{ "type": "Uakari", "name": "Uncle" },
	{ "type": "Vulture", "name": "Vivian" },
	{ "type": "Weasel", "name": "Wally" },
	{ "type": "Xerus", "name": "Xenitoo" },
	{ "type": "Yak", "name": "Yvonne" },
	{ "type": "Zebra", "name": "Zero" },
	{ "type": "Zebu", "name": "Zak" },

	{ "type": "Yoranian", "name": "Yersis" },
	{ "type": "Xoloitzcuintli", "name": "Huh" },
	{ "type": "Wombat", "name": "Wilbur" },
	{ "type": "Vaquita", "name": "Verle" },
	{ "type": "Uguisu", "name": "Umanana" },
	{ "type": "Turtle", "name": "Terry" },
	{ "type": "Squid", "name": "Sally" },
	{ "type": "Raccoon", "name": "Robert" },
	{ "type": "Quagga", "name": "Quirril" },

	{ "type": "Puma", "name": "Paul" },
	{ "type": "Ocelot", "name": "Olive" },
	{ "type": "Narwhal", "name": "Nathan" },
	{ "type": "Mole", "name": "Mollie" },
	{ "type": "Llama", "name": "Lucious" },
	{ "type": "Kiwi", "name": "Karen" },
	{ "type": "Jackal", "name": "Jack" },
	{ "type": "Impala", "name": "Ingrid" },
	{ "type": "Hyena", "name": "Harry" },

	{ "type": "Grasshopper", "name": "Grace" },
	{ "type": "Fox", "name": "Fred" },
	{ "type": "Elk", "name": "Ellie" },
	{ "type": "Duck", "name": "Donald" },
	{ "type": "Cougar", "name": "Cindy" },
	{ "type": "Ant", "name": "Aaron" },
	{ "type": "Avocet", "name": "Allie" },
	{ "type": "Caterpillar", "name": "Cuthbert" },
	{ "type": "Doxiepoo", "name": "Darlene" },

	{ "type": "Emu", "name": "Egads" },
	{ "type": "Frog", "name": "Frieda" },
	{ "type": "Gorilla", "name": "George" },
	{ "type": "Heron", "name": "Harriet" },
	{ "type": "Ibis", "name": "Ignatious" },
	{ "type": "Jellyfish", "name": "Julie" },
	{ "type": "Kudu", "name": "Kampton" },
	{ "type": "Lemur", "name": "Linda" },
	{ "type": "Meerkat", "name": "Mike" },

	{ "type": "Newfypoo", "name": "Nancy" },
	{ "type": "Otter", "name": "Otto" },
	{ "type": "Parrot", "name": "Paula" },
	{ "type": "Quetzal", "name": "Quick" },
	{ "type": "Rat", "name": "Roberta" },
	{ "type": "Sheep", "name": "Shepherd" },
	{ "type": "Toucan", "name": "Tracy" },
	{ "type": "Utonagan", "name": "Utobine" },
	{ "type": "Vizsla", "name": "Veriting" },

	{ "type": "Wasp", "name": "William" },
	{ "type": "Zonkey", "name": "Zip" },
	{ "type": "Wolf", "name": "Waldo" },
	{ "type": "Tarpon", "name": "Terrance" },
	{ "type": "Squirrel", "name": "Simila" },
	{ "type": "Rottsky", "name": "Raymond" },
	{ "type": "Puffin", "name": "Pauline" },
	{ "type": "Octopus", "name": "Eighty" },
	{ "type": "Numbat", "name": "Nubera" },

	{ "type": "Monkey", "name": "Uncle" },
	{ "type": "Lion", "name": "Leo" },
	{ "type": "Impala", "name": "Mr. Car" },
	{ "type": "Goose", "name": "Gabby" },
	{ "type": "Fly", "name": "Ondawall" },
	{ "type": "Eskipoo", "name": "Esky" },
	{ "type": "Dingo", "name": "Dana" },
	{ "type": "Crab", "name": "Chuck" },
	{ "type": "Bullfrog", "name": "Bobby" },
	{ "type": "Alligator", "name": "Allie" }
];

export default class AnimalDelivery {
	#deliveryServiceId;

	constructor() {
		this.#deliveryServiceId = Math.floor(Math.random() * 10000);
	}

	getAnimal() {
		const animalSelected = Math.floor(Math.random() * animalsCollection.length);
		return animalsCollection[animalSelected];
	}

	get deliveryServiceId () {
		return this.#deliveryServiceId;
	}
}









/*

export default class AnimalDelivery {
	#deliveryServiceId;

	constructor() {
		this.#deliveryServiceId = Math.floor(Math.random() * 10000);
	}

	getAnimal() {
		const animalSelected = Math.floor(Math.random() * animalsCollection.length);
		return animalsCollection[animalSelected];
	}

	get deliveryServiceId () {
		return this.#deliveryServiceId;
	}
}

 */







/*
let animalDeliveryInstance = null;

export default class AnimalDelivery {
	#deliveryServiceId;

	constructor() {
		if (!animalDeliveryInstance) {
			this.#deliveryServiceId = Math.floor(Math.random() * 10000);
			animalDeliveryInstance = this;
		}
		return animalDeliveryInstance
	}

	getAnimal() {
		const animalSelected = Math.floor(Math.random() * animalsCollection.length);
		return animalsCollection[animalSelected];
	}

	get deliveryServiceId () {
		return this.#deliveryServiceId;
	}
}

 */