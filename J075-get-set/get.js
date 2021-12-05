class Animal {

	name = '';
	tempF = 0;

	get tempC () {
		return (this.tempF - 32) * 5 / 9;
	}

}

const myCat = new Animal();
myCat.name = "Fluffy";
myCat.tempF = 101.7;
console.log(`Cat ${myCat.name}'s temperature: ${myCat.tempF} F (${myCat.tempC} C)`);













/*
myCat.tempC = 40;
console.log(`Cat ${myCat.name}'s temperature: ${myCat.tempF} F (${myCat.tempC} C)`);
*/
