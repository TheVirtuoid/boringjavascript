import Animal from './Animal.js';

const myCat = new Animal({ name: "Fluffy", type: "cat" });

document.getElementById('type').textContent = myCat.type;
document.getElementById('name').textContent = myCat.name;
document.getElementById('age').textContent = myCat.age.toString();
