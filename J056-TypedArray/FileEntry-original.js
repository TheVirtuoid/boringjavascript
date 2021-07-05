module.exports = class FileEntry {
	header;
	filename;
	extraField;
	dataOffset;
	fileOffset;
	fileData;

	constructor(incomingBuffer, start = 0) {
		const newBuffer = new ArrayBuffer(incomingBuffer.length);
		const arrayBuffer = new Uint8Array(newBuffer);
		arrayBuffer.set(new Uint8Array(incomingBuffer));
		const { buffer } = arrayBuffer;

		this.header = {
			signature: new Uint32Array(buffer, start, 1),
			version: new Uint16Array(buffer, start + 4, 1),
			bitFlag: new Uint16Array(buffer, start + 6, 1),
			compressionMethod: new Uint16Array(buffer, start + 8, 1),
			lastModFileTime: new Uint16Array(buffer, start + 10, 1),
			lastModFileDate: new Uint16Array(buffer, start + 12, 1),
			crc32: new Uint32Array(buffer, start + 14, 1),
			compressedSize: new Uint32Array(buffer, start + 18, 1),
			uncompressedSize: new Uint32Array(buffer, start + 22, 1),
			fileNameLength: new Uint16Array(buffer, start + 26, 1),
			extraFieldLength: new Uint16Array(buffer, start + 28, 1)
		}

		this.filename = this.header.fileNameLength ? String.fromCharCode.apply(null, new Uint8Array(buffer, start + 30, this.header.fileNameLength)) : '';
		this.extraField = this.header.extraFieldLength ? new Uint8Array(buffer, start + 30 + this.header.fileNameLength, this.header.extraFieldLength) : null;
		this.dataOffset = start + 30 + this.header.fileNameLength + this.header.extraFieldLength;
		this.fileData = new Uint8Array(buffer, this.dataOffset, this.header.compressedSize);
		this.fileOffset = this.dataOffset + this.header.compressedSize;
	}

	static isFileHeader = function (buffer, start = 0) {
		const signature = new Uint32Array(buffer.slice(start, start + 4), start, 1)[0];
		return signature === parseInt('0x04034b50');
	}

	static isCentralDirectoryStructure = function (buffer, start = 0) {
		const signature = new Uint32Array(buffer.slice(start, start + 4), start, 1)[0];
		return signature === parseInt('0x02014b50');
	}

}
