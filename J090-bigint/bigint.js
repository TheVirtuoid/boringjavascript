import { verbose } from "./verbose.js";

const maxInteger = Number.MAX_SAFE_INTEGER;
const bigInt = 1234567890123456789n;

console.log(`My maximum normal integer is: \n${verbose(maxInteger)}`);
console.log(`My really big number is:\n${verbose(bigInt)} `);

const bigIntNumber = BigInt("1234567890123456789");
const bigIntHex = BigInt("0x112210F47DE98115");
const bigIntOctal = BigInt("0o104420417217572300425");
const bigIntBinary = BigInt("0b1000100100010000100001111010001111101111010011000000100010101");

console.log(`\n\nNumber:\n${verbose(bigIntNumber)}`);
console.log(`\n\nHex:\n${verbose(bigIntHex)}`);
console.log(`\n\nOctal:\n${verbose(bigIntOctal)}`);
console.log(`\n\nBinary:\n${verbose(bigIntBinary)}`);
























/*
const bigIntNumber = BigInt("1234567890123456789");
const bigIntHex = BigInt("0x112210F47DE98115");
const bigIntOctal = BigInt("0o104420417217572300425");
const bigIntBinary = BigInt("0b1000100100010000100001111010001111101111010011000000100010101");

console.log(`\n\nNumber:\n${verbose(bigIntNumber)}`);
console.log(`\n\nHex:\n${verbose(bigIntHex)}`);
console.log(`\n\nOctal:\n${verbose(bigIntOctal)}`);
console.log(`\n\nBinary:\n${verbose(bigIntBinary)}`);
*/

