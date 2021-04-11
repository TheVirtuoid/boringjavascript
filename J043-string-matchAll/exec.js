const animals = "Cat,Dog,Horse,Cow,Coyote,Road Runner,Dolphin,Whale,Lizard,Wildcat,Dog,Horse,Cow,Bobcat,Whale";

const catRegExp = /,?([A-Za-z]*?[Cc]at),?/g;

let myCats = catRegExp.exec(animals);

while (myCats !== null) {
	console.log(myCats);
	myCats = catRegExp.exec(animals);
}

