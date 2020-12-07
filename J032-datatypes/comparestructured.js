let myData = { property: 1 };
console.log(`\nmyData Before:\t${JSON.stringify(myData)}`);

let myNewData = myData
myNewData.property = 2;
console.log(`myNewData:\t${JSON.stringify(myNewData)}`);

console.log(`myData After:\t${JSON.stringify(myData)}`);
