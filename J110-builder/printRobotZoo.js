const yesNo = (value) => {
	return value ? 'Yes' : 'No';
}

const printNumber = (value) => {
	return value === undefined ? 'n/a' : value.toString();
}

export default (robots) => {
	console.log(`\nName        Type   Body  Head  Tail  Legs  Wheels`);
	robots.forEach((robot) => {
		let line = `${robot.name.padEnd(12)}`;
		line = `${line}${robot.type.padEnd(7)}`;
		line = `${line}${yesNo(robot.body).padEnd(6)}`;
		line = `${line}${yesNo(robot.head).padEnd(6)}`;
		line = `${line}${yesNo(robot.tail).padEnd(6)}`;
		line = `${line}${printNumber(robot.legs).padEnd(6)}`;
		line = `${line}${printNumber(robot.wheels).padEnd(6)}`;
		console.log(line);
	});
	console.log('\n');
}