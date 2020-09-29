const date1 = new Date(2020, 0, 1);
const date2 = new Date(2020, 2, 22, 13,45,12,123);
console.log(date1 - date2);
console.log(date1 > date2);

const {days, hours, minutes, seconds, milliseconds} = elapsedTime(date1, date2);
console.log(`Days:\t\t${days}`);
console.log(`Hours:\t\t${hours}`);
console.log(`Minutes\t\t${minutes}`);
console.log(`Seconds\t\t${seconds}`);
console.log(`Milliseconds\t${milliseconds}`);
console.log('-------months/days------');
let months = 2;
let restOfDays = days - 31 - 28;
console.log(`Months/Days\t${months} / ${restOfDays}`);


function elapsedTime(date1, date2) {
	let diff = Math.abs(date1 - date2);
	const milliseconds = diff%1000;
	diff = Math.floor(diff / 1000);
	const seconds = diff%60;
	diff = Math.floor(diff / 60);
	const minutes = diff%60;
	diff = Math.floor(diff / 60);
	const hours = diff%24;
	const days = Math.floor(diff / 24);
	return {days, hours, minutes, seconds, milliseconds};
}
