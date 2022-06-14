class Ranks {
	static ACE = { name: 'ace', abbreviation: 'a' };
	static TWO = { name: 'two', abbreviation: '2' };
	static THREE = { name: 'three', abbreviation: '3' };
	static FOUR = { name: 'four', abbreviation: '4' };
	static FIVE = { name: 'five', abbreviation: '5' };
	static SIX = { name: 'six', abbreviation: '6' };
	static SEVEN = { name: 'seven', abbreviation: '7' };
	static EIGHT = { name: 'eight', abbreviation: '8' };
	static NINE = { name: 'nine', abbreviation: '9' };
	static TEN = { name: 'ten', abbreviation: '10' };
	static JACK = { name: 'jack', abbreviation: 'j' };
	static QUEEN = { name: 'queen', abbreviation: 'q' };
	static KING = { name: 'king', abbreviation: 'k' };

	static [Symbol.iterator] = function * () {
		yield Ranks.ACE;
		yield Ranks.TWO;
		yield Ranks.THREE;
		yield Ranks.FOUR;
		yield Ranks.FIVE;
		yield Ranks.SIX;
		yield Ranks.SEVEN;
		yield Ranks.EIGHT;
		yield Ranks.NINE;
		yield Ranks.TEN;
		yield Ranks.JACK;
		yield Ranks.QUEEN;
		yield Ranks.KING;
	};

	constructor() {
		throw new Error('Ranks class is an enumeration and cannot be instantiated.');
	}
}

console.log([...Ranks]);

for(const rank of Ranks) {
	console.log(`name: ${rank.name} \t abbreviation: ${rank.abbreviation}`);
}

console.log(`\nThe Ace is represented by: name = ${Ranks.ACE.name}, abbreviation = ${Ranks.ACE.abbreviation}`);














/*






	static [Symbol.iterator] = function * () {
		yield Ranks.ACE;
		yield Ranks.TWO;
		yield Ranks.THREE;
		yield Ranks.FOUR;
		yield Ranks.FIVE;
		yield Ranks.SIX;
		yield Ranks.SEVEN;
		yield Ranks.EIGHT;
		yield Ranks.NINE;
		yield Ranks.TEN;
		yield Ranks.JACK;
		yield Ranks.QUEEN;
		yield Ranks.KING;
	};





console.log([...Ranks]);

for(const rank of Ranks) {
	console.log(`name: ${rank.name} \t abbreviation: ${rank.abbreviation}`);
}
*/
