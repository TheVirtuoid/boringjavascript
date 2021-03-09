const animals =
		"Cat,Dog,Horse,Cow,Coyote,Road Runner,Dolphin,Whale,Lizard,Cat,Dog,Horse,Cow,Cat,Whale"
				.split(',');

let myCatCount = 0;
let catIndex = animals.indexOf('Cat');

while (catIndex !== -1) {
	myCatCount ++;
	catIndex = animals.indexOf('Cat', catIndex + 1);
}

console.log(`\nI have ${myCatCount} cats.`);