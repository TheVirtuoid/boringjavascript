import Zoo from "./Zoo.js";

const zooVirtuoid = new Zoo('Virtuoid');
const zooAngel = new Zoo('Angel');
const zooHoli = new Zoo('Holi');

[zooVirtuoid, zooAngel, zooHoli].forEach((zoo) => {
	for(let i = 0; i < 3; i++) {
		zoo.receiveAnimal();
	}
	zoo.showZoo();
});

