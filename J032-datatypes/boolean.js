const isTrue = true;
const isFalse = false;

console.log(`isTrue is a ${typeof isTrue} and the value is ${isTrue}`);
console.log(`isFalse is a ${typeof isFalse} and the value is ${isFalse}`);


const isTruthyString = "Some String";
const isFalsyString = "";
const isTruthyNumber = 1;
const isFalsyNumber = 0;
const isTruthyObject = {a: 1};
const isFalsyObject = {};

console.log(`isTruthyString is a ${typeof isTruthyString} and the derived boolean value is ${isTruthyString ? true : false}`);
console.log(`isFalsyString is a ${typeof isFalsyString} and the derived boolean value is ${isFalsyString ? true : false}`);
console.log(`isTruthyNumber is a ${typeof isTruthyNumber} and the derived boolean value is ${isTruthyNumber ? true : false}`);
console.log(`isFalsyNumber is a ${typeof isFalsyNumber} and the derived boolean value is ${isFalsyNumber ? true : false}`);
console.log(`isTruthyObject is a ${typeof isTruthyObject} and the derived boolean value is ${isTruthyObject ? true : false}`);
console.log(`isFalsyObject is a ${typeof isFalsyObject} and the derived boolean value is ${isFalsyObject ? true : false}`);
