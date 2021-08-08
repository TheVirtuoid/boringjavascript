(async () => {
	const animalToLoad = 'cat';
	const { default: ZooAnimal } = await import(`./${animalToLoad}.js`);

	const myAnimal = new ZooAnimal({ name: 'Fluffy' });
	console.log(myAnimal.toSuperString());
})();