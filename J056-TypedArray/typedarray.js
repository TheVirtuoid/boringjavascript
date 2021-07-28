const binaryArrayBuffer = buildBuffer();

const int8Array = new Int8Array(binaryArrayBuffer, 0, 10);
const uint8Array = new Uint8Array(binaryArrayBuffer, 0, 10);
const uint8ClampedArray = new Uint8ClampedArray(binaryArrayBuffer, 0, 10);
const int16Array = new Int16Array(binaryArrayBuffer, 0, 10);
const uint16Array = new Uint16Array(binaryArrayBuffer, 0, 10);
const int32Array = new Int32Array(binaryArrayBuffer, 0, 10);
const uint32Array = new Uint32Array(binaryArrayBuffer, 0, 10);
const float32Array = new Float32Array(binaryArrayBuffer, 0, 10);
const float64Array = new Float64Array(binaryArrayBuffer, 0, 10);
const bigInt64Array = new BigInt64Array(binaryArrayBuffer, 0, 10);
const bigUint64Array = new BigUint64Array(binaryArrayBuffer, 0, 10);

console.log(`int8Array:\n${int8Array}\n`);
console.log(`uint8Array:\n${uint8Array}\n`);
console.log(`uint8ClampedArray:\n${uint8ClampedArray}\n`);
console.log(`int16Array:\n${int16Array}\n`);
console.log(`uint16Array:\n${uint16Array}\n`);
console.log(`int32Array:\n${int32Array}\n`);
console.log(`uint32Array:\n${uint32Array}\n`);
console.log(`float32Array:\n${float32Array}\n`);
console.log(`float64Array:\n${float64Array}\n`);
console.log(`bigInt64Array:\n${bigInt64Array}\n`);
console.log(`bigUint64Array:\n${bigUint64Array}\n`);




function buildBuffer() {
	const binaryArrayBuffer = new ArrayBuffer(256);
	const binaryArray = new Uint8ClampedArray(binaryArrayBuffer);
	for(let i = 0; i < 256; i++) {
		binaryArray[i] = Math.floor(Math.random() * 256);
	}
	return binaryArray.buffer;
}