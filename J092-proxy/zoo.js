const zoo = {
	createAnimal(name, type = '') {
		return { name, type };
	},
	nameWithPrefix(animal) {
		return `prefix-${animal.name}`;
	},
	nameWithSuffix(animal) {
		return `${animal.name}-suffix`;
	},
	nameWithPrefixAndSuffix(animal) {
		return `prefix-${animal.name}-suffix`
	}
}

export { zoo }