const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

/*
const lorems = loremIpsum.split(" ");
const newLorems = [];
lorems.forEach( (word) => {
	let newWord = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
	newLorems.push(newWord);
});

const newLoremIpsum = newLorems.join(" ");
console.log('\n---------------------- LOREM IPSUM ----------------');
console.log(loremIpsum);
console.log('\n-------------------- NEW LOREM IPSUM --------------');
console.log(newLoremIpsum);
*/


/*
let newLoremIpsum = "";
for (index = 0, length = loremIpsum.length; index < length; index++) {
	let letter = loremIpsum.charAt(index).toLowerCase();
	if (index % 2 === 0) {
		letter = letter.toUpperCase();
	}
	newLoremIpsum += letter;
}
console.log('\n---------------------- LOREM IPSUM ----------------');
console.log(loremIpsum);
console.log('\n-------------------- NEW LOREM IPSUM --------------');
console.log(newLoremIpsum);
*/


let newLoremIpsum = "";
for (index = 0, length = loremIpsum.length; index < length; index++) {
	let letter = loremIpsum.charAt(index).toLowerCase();
	if (Math.random() * 10 >= 5) {
		letter = letter.toUpperCase();
	}
	newLoremIpsum += letter;
}
console.log('\n---------------------- LOREM IPSUM ----------------');
console.log(loremIpsum);
console.log('\n-------------------- NEW LOREM IPSUM --------------');
console.log(newLoremIpsum);


