const data = [
	{name: "Amalgamated Steel", amount: 5677.45},
	{name: "Acme Products, Inc.", amount: 8122.19},
	{name: "Zuzu's Florist Corp.", amount: 7221.87},
	{name: "Industrial Basket Weavers", amount: 3998.11},
	{name: "GHT, Ltd.", amount: 11072.12}
]
printTable(data);






function printTable (data) {
	let nameLength = 0;
	let amountLength = 0;
	let total = 0;
	let totalPct = 0;
	data.forEach( (company) => {
		nameLength = Math.max(nameLength, company.name.length);
		amountLength = Math.max(amountLength, currency(company.amount).length);
		total += company.amount;
	});
	console.log(`+-${spacer("", "-", nameLength)}-+-${spacer("", "-", amountLength)}-+------+`);
	console.log(`| ${spacer("Company Name", " ", nameLength)} | ${spacer("Amount", " ", amountLength)} | Pct  |`);
	console.log(`+-${spacer("", "-", nameLength)}-+-${spacer("", "-", amountLength)}-+------+`);
	data.forEach( (company) => {
		let pct = parseInt(((company.amount / total) * 100).toFixed(0));
		totalPct += pct;
		console.log(`| ${spacer(company.name, " ", nameLength)} | ${spacer(currency(company.amount), " ", amountLength)} |  ${pct}% |`);
	});
	console.log(`+-${spacer("", "-", nameLength)}-+-${spacer("", "-", amountLength)}-+------+`);
	console.log(`| ${spacer("TOTAL", " ", nameLength)} | ${spacer(currency(total), " ", amountLength)} | ${spacer(totalPct, " ", 4)}% |`);
	console.log(`+-${spacer("", "-", nameLength)}-+-${spacer("", "-", amountLength)}-+------+`);
}

function spacer (data, padding, maxLength) {
	return `${data}${padding.repeat(maxLength - data.length)}`;
}

// Friendly reminder - DO NOT USE IN PRODUCTION!
function currency (num) {
	let value = num.toFixed(2);
	let returnValue = "";
	let oldIndex = value.length;
	for( let i = value.length - 6; i > 0; i -= 3) {
		returnValue = `${value.substring(i, oldIndex)}${returnValue}${oldIndex === value.length ? "" : ","}`;
		oldIndex= i;
	}
	return `$ ${value.substring(0, oldIndex)}${oldIndex === value.length ? "" : ","}${returnValue}`;
}


