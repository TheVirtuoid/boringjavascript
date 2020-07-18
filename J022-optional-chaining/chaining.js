const animals = [
	{
		type: "Coyote",
		name: "Wile E.",
		stats: {
			height: "0.67 m",
			weight: "20.86 kg",
			speed: "64.37 kmh",
			intelligence: "Super Genius"
		},
		habitat: {
			location: "North America - South West"
		}
	},
	{
		type: "Cat",
		name: "Fluffy",
		fur: "Soft",
		stats: {
			height: "0.23 m",
			weight: "4.08 kg",
			speed: "40.23 kmh",
			intelligence: "Genius"
		}
	}
]

const coyoteFur = animals[0].fur;
const catHabitat = animals[1].habitat?.location;
console.log(`My coyote's fur is ${coyoteFur}`);
console.log(`My cat's habitat is ${catHabitat}`);

