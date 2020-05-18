const animals = [
	{ type: "Cat", name: "Fluffy", size: "small" },
	{ type: "Dog", name: "Fido", size: "medium" },
	{ type: "Horse", name: "Mr. Ed", size: "big" },
	{ type: "Cow", name: "Betsy", size: "big" },
	{ type: "Coyote", name: "Wile E.", size: "medium" },
	{ type: "Road Runner", name: "Beep Beep", size: "small" },
	{ type: "Dolphin", name: "Flipper", size: "big" },
	{ type: "Whale", name: "Moby Dick", size: "huge" },
	{ type: "Lizard", name: "Larry", size: "tiny" }
];
let text = "";
animals.forEach( animal => {
	switch (animal.size) {
		case "tiny":
			text = "super tiny";
			break;
		case "small":
			text = "quite small";
			break;
		case "medium":
			text = "average";
			break;
		case "big":
			text = "quite large";
			break;
		case "huge":
			text = "a real giant";
			break;
	}
	console.log(`The ${animal.type} is ${text}.`);
});
