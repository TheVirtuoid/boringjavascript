const { Temporal } = require('proposal-temporal');

const date = Temporal.now.date();
console.log(`The date is:\t\t${date.toString()}`);

const time = Temporal.now.time();
console.log(`The time is:\t\t${time.toString()}`);

const dateTime = Temporal.now.dateTime();
console.log(`Both date and time!\t${dateTime.toString()}`);

const date1 = Temporal.Date.from('2020-03-22 13:45:12.143');
const date2 = Temporal.Date.from('2020-01-01');

let difference = date1.difference(date2);
console.log(`Number of Days:\t\t${difference.days}`);
difference = date1.difference(date2, { largestUnit: 'months' });
console.log(`Number of Months/Days:\t${difference.months} / ${difference.days}`);
