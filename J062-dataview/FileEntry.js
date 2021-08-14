/*
   4.3.7  Local file header:

      local file header signature     4 bytes  (0x04034b50)
      version needed to extract       2 bytes
      general purpose bit flag        2 bytes
      compression method              2 bytes
      last mod file time              2 bytes
      last mod file date              2 bytes
      crc-32                          4 bytes
      compressed size                 4 bytes
      uncompressed size               4 bytes
      file name length                2 bytes
      extra field length              2 bytes

      file name (variable size)
      extra field (variable size)

 */

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
			signature: FileEntry.toUint32Array(new Uint8Array(buffer, start, 4))[0],
			version: FileEntry.toUint16Array(new Uint8Array(buffer, start + 4, 2))[0],
			bitFlag: FileEntry.toUint16Array(new Uint8Array(buffer, start + 6, 2))[0],
			compressionMethod: FileEntry.toUint16Array(new Uint8Array(buffer, start + 8, 2))[0],
			lastModFileTime: FileEntry.toUint16Array(new Uint8Array(buffer, start + 10, 2))[0],
			lastModFileDate: FileEntry.toUint16Array(new Uint8Array(buffer, start + 12, 2))[0],
			crc32: FileEntry.toUint32Array(new Uint8Array(buffer, start + 14, 4))[0],
			compressedSize: FileEntry.toUint32Array(new Uint8Array(buffer, start + 18, 4))[0],
			uncompressedSize: FileEntry.toUint32Array(new Uint8Array(buffer, start + 22, 4))[0],
			fileNameLength: FileEntry.toUint16Array(new Uint8Array(buffer, start + 26, 2))[0],
			extraFieldLength: FileEntry.toUint16Array(new Uint8Array(buffer, start + 28, 2))[0]
		}
		this.filename = this.header.fileNameLength ? String.fromCharCode.apply(null, new Uint8Array(buffer, start + 30, this.header.fileNameLength)) : '';
		this.extraField = this.header.extraFieldLength ? new Uint8Array(buffer, start + 30 + this.header.fileNameLength, this.header.extraFieldLength) : null;
		this.dataOffset = start + 30 + this.header.fileNameLength + this.header.extraFieldLength;
		this.fileData = new Uint8Array(buffer, this.dataOffset, this.header.compressedSize);
		this.fileOffset = this.dataOffset + this.header.compressedSize;
	}

	static isFileHeader = function (buffer, start = 0) {
		const signature = FileEntry.toUint32Array(new Uint8Array(buffer.slice(start, start + 4), start, 4))[0];
		return signature === parseInt('0x04034b50');
	}

	static isCentralDirectoryStructure = function (buffer, start = 0) {
		const signature = FileEntry.toUint32Array(new Uint8Array(buffer.slice(start, start + 4), start, 4))[0];
		return signature === parseInt('0x02014b50');
	}

	static toUint32Array  = function (uint8array) {
		const newBuffer = new ArrayBuffer(4);
		const arrayBuffer = new Uint8Array(newBuffer);
		arrayBuffer.set(uint8array);
		return new Uint32Array(arrayBuffer.buffer, 0, 1);
	}

	static toUint16Array  = function (uint8array) {
		const newBuffer = new ArrayBuffer(2);
		const arrayBuffer = new Uint8Array(newBuffer);
		arrayBuffer.set(uint8array);
		return new Uint16Array(arrayBuffer.buffer, 0, 1);
	}
}

/*

00000000   50 4B 03 04 14 00 00 00 08 00 48 96 DD 52 B9 1C  PK........H?YR1.
00000010   3D 93 44 01 00 00 1D 02 00 00 0A 00 00 00 62 6C  =?D...........bl
00000020   61 6E 6B 2E 68 74 6D 6C

                                   6D 92 5F 4F C3 20 14 C5  ank.htmlm?_OA .Å
00000030   9F 67 E2 77 60 F5 55 56 F7 60 34 13 9A B8 3F 26  ?gâw`oUV÷`4.?,?&
00000040   FA E2 12 B7 44 1F 29 BD 6D 6F 46 A1 52 D6 65 1A  úâ.·D.)½moF¡RÖe.
00000050   BF BB D0 6E 71 51 9F 38 70 EE F9 71 73 81 0D E7  ¿»DnqQ?8pîùqs?.ç
00000060   CF B3 D5 DB 72 41 4A 57 A9 E4 FC 8C 85 95 28 A1  I3OUrAJWcäü???(¡
00000070   0B 1E 81 8E FC C9 80 95 20 B2 20 06 AC 02 27 88  ..??üÉ?? ² .¬.'?
00000080   2C 85 6D C0 F1 68 BD 7A A0 B7 D1 8F E3 19 AE A6  ,?mAñh½z ·Ñ?a.r▌
00000090   F0 BE C5 96 47 AF 74 7D 4F 67 A6 AA 85 C3 54 41  d_Å?G_t}Og▌ª?ATA
000000A0   44 A4 D1 0E B4 8F 3D 2E 38 64 05 9C 06 B5 A8 80  D☼Ñ.'?=.8d.?.µ"?
000000B0   47 2D C2 AE 36 D6 9D D4 EE 30 73 25 CF A0 45 09  G-Ar6Ö?Oî0s%I E.
000000C0   B4 DB 5C A2 46 87 42 D1 46 0A 05 7C 3C BA FA 0B  'U\¢F?BÑF..|<ºú.
000000D0   9A 43 23 2D D6 0E 8D 3E 61 1D EA 14 EA 0D B1 A0  ?C#-Ö.?>a.ê.ê.± 
000000E0   78 84 32 F8 A5 85 FC 1F B3 71 7B 05 4D 09 E0 7E  x?2o¥?ü.3q{.M.à~
000000F0   95 38 74 0A 92 A9 B1 A8 0B F2 24 5A F1 D2 DD 45  ?8t.?c±".ò$ZñOYE
00000100   28 99 2A E1 D3 4B 51 00 8B BB AA 3E E0 49 07 39  (?*áOKQ.?»ª>àI.9
00000110   48 4D B6 27 9F 5E 06 2D E4 A6 B0 66 AB 33 2A 8D  HM¶'?^.-ä▌°f«3*?
00000120   32 76 42 2E 84 48 D3 3C BF EB FD DC F7 4D 1B FC  2vB.?HO<¿ëyÜ÷M.ü
00000130   80 09 19 8F 6E AE 2D 54 BD F1 D5 41 E3 23 D5 CB  ?..?nr-T½ñOAa#OE
00000140   E3 FB B0 80 EF EF AC 13 86 C9 AA C4 86 D4 BE 1D  aû°?ïï¬.?ÉªÄ?O_.
00000150   82 61 04 61 1C 42 A9 3D 51 90 3B 92 86 66 87 2C  ?a.a.Bc=Q?;??f?,
00000160   C6 84 C5 75 CF 39 C4 3D B0 FF 0B DF





50 4B 03 04  Æ?ÅuI9Ä=°..ßPK..
00000170   14 00 00 00 08 00 48 96 DD 52 AA E2 ED B1 91 01  ......H?YRªâí±?.
00000180   00 00 17 05 00 00 0D 00 00 00 63 6C 61 73 73 6C  ..........classl
00000190   69 73 74 2E 63 73 73 A5 92 4D 4E C3 30 10 85 F7  ist.css¥?MNA0.?÷
000001A0   95 7A 07 AB AC 13 D1 42 A1 84 A3 00 8B 71 3C 49  ?z.«¬.ÑB¡?£.?q<I
000001B0   2C 1C 3B 72 1C 95 16 71 77 FC 93 34 2E 05 77 41  ,.;r.?.qwü?4..wA
000001C0   22 45 2F 33 F3 3D 7B 3C A6 8A 1D C8 E7 72 41 EC  "E/3ó={<▌?.EçrAì
000001D0   43 A1 7C AF B5 1A 24 CB 4A 25 94 2E C8 0D 00 A5  C¡|_µ.$EJ%?.E..¥
000001E0   55 F5 1C F2 95 92 26 EB F9 11 0B B2 CE 1F B7 1A  Uo.ò??&ëù..²I.·.
000001F0   5B 9B F8 5A 2E 96 0B 3A 18 A3 E4 E4 D3 01 63 5C  [?oZ.?.:.£ääO.c\
00000200   D6 99 E6 75 63 0A B2 F1 85 97 0E 9B ED 9C A0 4A  Ö?æuc.²ñ??.?í? J
00000210   33 D4 99 06 C6 87 DE 26 E7 CC E5 A6 6A 8D 28 C7  3O?.Æ?_&çIå▌j?(Ç
00000220   EC 18 DA 37 DC 60 6C 65 63 52 49 9C F6 D7 AC 73  ì.U7Ü`lecRI?öx¬s
00000230   8D CC EF 6F 86 6C 24 CA 7B D7 1F 15 3E 36 D5 70  ?Iïo?l$E{x..>6Op
00000240   D9 0D 66 2A B8 6C 64 2A BB E9 04 1C 5C F7 15 47  U.f*,ld*»é..\÷.G
00000250   71 5A 92 F1 DE C5 9D 25 67 61 A3 5E 66 06 5B 9B  qZ?ñ_Å?%ga£^f.[?
00000260   30 E8 9A 1B 5A 69 7B DF DC 59 37 02 83 51 7F 58  0è?.Zi{ßÜY7.?Q⌂X
00000270   0A A0 28 52 C6 C1 2A AB A1 0B 27 99 5E 6F 67 2B  . (RÆA*«¡.'?^og+
 */