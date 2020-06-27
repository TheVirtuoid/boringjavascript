const animal = " \t\n\r\uFEFF\xA0  I have a cat and his name is Fluffy \t\n\r\uFEFF\xA0  ";

console.log(`-${animal}-`);

let trimAnimal = animal.trim();
console.log(`-${trimAnimal}-`);
