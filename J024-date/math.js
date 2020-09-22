const date1 = new Date(2020, 8, 20);
const date2 = new Date(2020, 8, 19, 13,45,12,123);
console.log(date1 - date2);
console.log(date1 > date2);

const {days, hours, minutes, seconds, milliseconds} = elapsedTime(date1, date2);
console.log(`Days:\t${days}`);
console.log(`Hours:\t${hours}`);
console.log(`Minutes\t${minutes}`);
console.log(`Seconds\t${seconds}`);
console.log(`Milliseconds\t${milliseconds}`);


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