console.log(Math.floor("1.2"));
console.log(Math.floor("TheVirtuoid"));

/* output
1
NaN
*/

console.log(Math.floor({ myCat: 3 }));
console.log(Math.floor(undefined));
console.log(Math.floor(NaN));

/* output
NaN
NaN
NaN
*/

console.log(Math.floor(false));
console.log(Math.floor(true));
console.log(Math.floor(null));
console.log(Math.floor(""));

/* output
0
1
0
0
*/

