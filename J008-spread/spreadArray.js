
/*
const toInsert = [1000, 2000];
let newArray = [1 ,2].concat(toInsert).concat([3, 4, 5]);
console.log(newArray);
*/

const toInsert = [1000, 2000];
let newArray = [1 ,2, ...toInsert, 3, 4, 5];
console.log(newArray);
