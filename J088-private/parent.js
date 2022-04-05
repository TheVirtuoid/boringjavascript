import Child from "./Child.js";

const myChild = new Child({ name: 'Bobby', age: 8 });

console.log(`My child's name is ${myChild.name}.`);
console.log(`My child's age is ${myChild.age}.`);
console.log(`My child's real age is ${myChild.getAge()}.`);
console.log(`My child's age in months is ${myChild.getAllAges().months}.`);































/*

console.log(`My child's age in months is ${myChild.getAgeInMonths()}.`);
console.log(`My child's age in months is ${myChild.getAllAges().months}.`);

 */