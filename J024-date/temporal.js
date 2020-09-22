const { Temporal } = require('proposal-temporal');

const date = Temporal.now.date();
console.log(`The date is:\t\t${date.toString()}`);

const time = Temporal.now.time();
console.log(`The time is:\t\t${time.toString()}`);

const dateTime = Temporal.now.dateTime();
console.log(`Both date and time!\t${dateTime.toString()}`);