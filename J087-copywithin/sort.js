


/* code stolen from



 */


function quick_Sort(origArray) {
	if (origArray.length <= 1) {
		return origArray;
	} else {

		const left = [];
		const right = [];
		const newArray = [];
		const pivot = origArray.pop();
		const length = origArray.length;

		for (let i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);