const animals = "Cat,Dog,Horse,Cow,Coyote,Road Runner,Dolphin,Whale,Lizard,Wildcat,Dog,Horse,Cow,Bobcat,Whale";

const myCats = animals.matchAll(/,?(?<name>[A-Za-z]*?[Cc]at),?/g);

for (const cat of myCats) {
	console.log(cat.groups.name);
}