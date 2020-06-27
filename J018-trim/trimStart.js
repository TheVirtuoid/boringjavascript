const animal = "   I have a cat and his name is Fluffy   ";

console.log(`-${animal}-`);

let trimAnimal = animal.trimStart();
console.log(`(trimStart) -${trimAnimal}-`);

trimAnimal = animal.trimLeft();
console.log(`(trimLeft)  -${trimAnimal}-`);
