const entrance = () => {
	console.log('Welcome to the Zoo!');
}

const egress = () => {
	console.log('This way to the Egress!');
}

const type = (animal) => {
	return {
		cat: "Feline",
		dog: "Canine",
		whale: "Really Big Animal"
	}[animal.type];
}

export { entrance, egress, type };