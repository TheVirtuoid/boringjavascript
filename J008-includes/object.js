const animals = [
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

/*
let hasCat = animals.includes("Cat");
console.log(`Do I have a Cat? ${hasCat ? "Yes!" : "No."}`);

let hasCamel = animals.includes("Camel");
console.log(`Do I have a Camel? ${hasCamel ? "Yes!" : "No."}`);

let hasSmallCat = animals.includes("cat");
console.log(`Do I have a small cat? ${hasSmallCat ? "Yes!" : "No."}`);
*/










/*
animals.push({ type: "Salamander", name: "Sammy" });
let hasSalamander = animals.includes({ type: "Salamander", name: "Sammy" });
console.log(`Do I have a Salamander? ${hasSalamander ? "Yes!" : "No."}`);

*/
















let mySalamander = {type: "Salamander", name: "Sammy"};
animals.push(mySalamander);
let hasSalamander1 = animals.includes({type: "Salamander", name: "Sammy"});
let hasSalamander2 = animals.includes(mySalamander);
console.log(`Do I have a salamander (1)? ${hasSalamander1 ? "Yes!" : "No."}`);
console.log(`Do I have a salamander (2)? ${hasSalamander2 ? "Yes!" : "No."}`);






