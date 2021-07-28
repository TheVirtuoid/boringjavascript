const rawBuffer = new ArrayBuffer(16);
const rawBufferArray = new Uint8Array(rawBuffer);
rawBufferArray.set([1, 1, 4, 250, 65, 66, 67, 68, 69, 70, 71, 72, 0xae, 0x87, 0x3e, 0x44]);
const { buffer } = rawBufferArray;

/*

header:
	signature: unsigned word
	status: unsigned byte
	weight: signed byte
	title: char(8)
	value: float

 */

const header = {
	signature: new Uint16Array(buffer, 0, 1)[0],
	status: new Uint8Array(buffer, 2, 1)[0],
	weight: new Int8Array(buffer, 3, 1)[0],
	title: String.fromCharCode.apply(null, new Uint8Array(buffer, 4, 8)),
	value: new Float32Array(buffer, 12, 1)[0]
}

console.log(header);
