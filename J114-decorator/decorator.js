import Input from "./classes/Input.js";
import ValidNumeric from "./validations/ValidNumeric.js";
import ValidPositiveNumber from "./validations/ValidPositiveNumber.js";

const myNumber = new Input({ value: "foobar" });

const validation = new ValidPositiveNumber(new ValidNumeric(myNumber));
if (!validation.isValid()) {
	console.log(`\nValidation Errors!!`);
	validation.valid.forEach((error) => {
		console.log(`   ${error}`);
	});
} else {
	console.log(`\n"${myNumber.value}" passes all validation checks.`);
}





/*
import Input from "./classes/Input.js";
import ValidNumeric from "./validations/ValidNumeric.js";

const myNumber = new Input({ value: 1 });

const validation = new ValidNumeric(myNumber);
console.log(`\nIs myNumber numeric? ${validation.isValid() ? 'Yes!!' : 'NO!!' }`);

 */