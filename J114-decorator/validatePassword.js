import IncludeLowerCase from "./passwordValidations/IncludeLowerCase.js";
import IncludeSpecialCharacter from "./passwordValidations/IncludeSpecialCharacter.js";
import IncludeUpperCase from "./passwordValidations/IncludeUpperCase.js";
import MaximumCharacters from "./passwordValidations/MaximumCharacters.js";
import MinimumCharacters from "./passwordValidations/MinimumCharacters.js";
import IncludeNumber from "./passwordValidations/IncludeNumber.js";
import Password from "./classes/Password.js";


const myPassword = new Password({ value: 'Q%q1qqqqqiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii' });

const validPassword = new IncludeLowerCase(
		new IncludeNumber(
				new IncludeSpecialCharacter(
						new IncludeUpperCase(
								new MaximumCharacters(
										new MinimumCharacters(
												myPassword
										)
								)
						)
				)
		)
)

if (validPassword.isValid()) {
	console.log('\nYou passed a valid password!');
} else {
	console.log('\nINVALID PASSWORD!');
	validPassword.valid.forEach((error) => console.log(`   ${error}`));
}