const animal = {
	head: true,

	born: function () {
		console.log('--------inside born');
		console.log(this);
	},

	walk: () => {
		console.log('--------inside walk');
		console.log(this);
	}

}

animal.born();
animal.walk();
















/*
const hasHead = () => {
	console.log('-------- hasHead')
	console.log(this);
	return animal.head;
}

console.log(hasHead());
*/
