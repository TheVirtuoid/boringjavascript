class Cat {
	constructor(parentCat = null) {
		this.children = [];
		this.parent = parentCat;
		if (parentCat) {
			parentCat.addCat(this);
		}
	}
	addCat (cat) {
		this.children.push(cat);
	}
}

const myCat = new Cat();
const myKitten1 = new Cat(myCat);
const myKitten2 = new Cat(myCat);
const myKitten3 = new Cat(myCat);

console.log(JSON.stringify(myCat));

