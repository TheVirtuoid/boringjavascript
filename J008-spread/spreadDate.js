const months = ["January", "February", "March", "April", "May", "June", "July", "August", 	"September", "October", "November", "December"];
/*
const myDate = new Date(2020, 5, 1);
console.log(`My date is ${months[myDate.getMonth()]} ${myDate.getDate()}, ${myDate.getFullYear()}`);
*/

/*
const theDate = [2020, 5, 1]
const myDate = new Date.apply(null, theDate);
console.log(`My date is ${months[myDate.getMonth()]} ${myDate.getDate()}, ${myDate.getFullYear()}`);
*/

const theDate = [2020, 5, 1]
const myDate = new Date(...theDate);
console.log(`My date is ${months[myDate.getMonth()]} ${myDate.getDate()}, ${myDate.getFullYear()}`);
