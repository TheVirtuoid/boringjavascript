import chalk from "chalk";

const green0 = chalk.green('0');
const green1 = chalk.green('1');
const cyan0 = chalk.cyan('0');
const cyan1 = chalk.cyan('1');

console.log(`
AND
+---+---+---+
|   | ${cyan0} | ${cyan1} |
+---+---+---+
| ${green0} | 0 | 0 |
|---+---+---+
| ${green1} | 0 | 1 |
+---+---+---+

OR
+---+---+---+
|   | ${cyan0} | ${cyan1} |
+---+---+---+
| ${green0} | 0 | 1 |
|---+---+---+
| ${green1} | 1 | 1 |
+---+---+---+

XOR
+---+---+---+
|   | ${cyan0} | ${cyan1} |
+---+---+---+
| ${green0} | 0 | 1 |
|---+---+---+
| ${green1} | 1 | 0 |
+---+---+---+

`);