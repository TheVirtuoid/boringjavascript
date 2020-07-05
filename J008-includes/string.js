const animals = "Cat,Dog,Horse,Cow,Coyote,Road Runner,Dolphin,Whale,Lizard";

let hasCat = animals.includes("Cat");
console.log(`Do I have a Cat? ${hasCat ? "Yes!" : "No."}`);

let hasCamel = animals.includes("Camel");
console.log(`Do I have a Camel? ${hasCamel ? "Yes!" : "No."}`);

let hasSmallCat = animals.includes("cat");
console.log(`Do I have a small cat? ${hasSmallCat ? "Yes!" : "No."}`);
