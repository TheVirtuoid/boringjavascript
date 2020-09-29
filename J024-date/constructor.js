const today = new Date();
console.log(`Today's date:\t\t\t${today}`);

const unixTimestamp = new Date(1600786800000);
console.log(`The UNIX Timestamp:\t\t${unixTimestamp}`);

const stringTimestamp = new Date('September 22, 2020 11:00:00');
console.log(`The String Timestamp:\t\t${stringTimestamp}`);

const paramTimestamp = new Date(2020, 8, 22, 11, 22, 43, 123);
console.log(`The Params Timestamp:\t\t${paramTimestamp}`);

const dateOnlyTimestamp = new Date(2020, 8, 22);
console.log(`The Date Only Timestamp:\t${dateOnlyTimestamp}`);

