const statement = "I shot an arrow into the air it fell to earth into a bear";

const words = statement.split(" ");
const backwardsWords = words.map((word) => {
	return word.split('').reverse().join('');
});
backwardsWords.reverse();

const backwardsStatement = backwardsWords.join(' ');

console.log(backwardsStatement);




























/*
console.log(statement.split('').reverse().join(''));
*/
