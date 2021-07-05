const fs = require('fs');
const FileEntry = require('./FileEntry.js');

const zipFileContents = fs.readFileSync('./J050-classList.zip');
const files = [];
let allDone = false;
let start = 0;
while (!allDone) {
	if (FileEntry.isCentralDirectoryStructure(zipFileContents, start)) {
		allDone = true;
	} else {
		files.push(new FileEntry(zipFileContents, start));
		start = files[files.length -1].fileOffset;
	}
}
console.log(`\n${files.length} Files Found:`);
console.log(`Name\t\tCompressed Size`);
console.log(`---------------\t---------------`);
files.forEach( file => {
	console.log(`${file.filename}\t${file.header.compressedSize}`);
});
