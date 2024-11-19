import { dataGenerate } from './data-generator.js';
import { arrExtend, arrForEachChunk, uint32ArrayWithNumbers, wait } from './utils.js';

const data = [];

/** @param {MessageEvent<InitMessageData & FilterMessageData>} evt */
onmessage = async function (evt) {
	switch (evt.data[0]) {
		case 1: await filter(evt.data[1]); break;
		case 0: dataInit(evt.data[1], evt.data[2], evt.data[3]); break;
	}
};

/** @param {any[][]} initData, @param {number} rowsCount, @param {number} colCount */
const dataInit = (initData, rowsCount, colCount) => {
	const CHUNK_SIZE = 10000;

	arrExtend(data, initData);
	const post = /** @param {number} rwCount */ rwCount => {
		const chunkData = dataGenerate(rwCount, colCount);
		postMessage([0, chunkData]);
		arrExtend(data, chunkData);
	};

	const chunkFullCount = Math.trunc(rowsCount / CHUNK_SIZE);
	for (let ii = 0; ii < chunkFullCount; ii++) {
		post(CHUNK_SIZE);
	}
	post(rowsCount - chunkFullCount * CHUNK_SIZE);
};

/** @type {string} */
let _str = null;

/** @param {string} str */
const filter = async str => {
	_str = str;

	/** @param {Uint32Array} arr */
	const postUint32Array = arr =>
		// @ts-ignore
		self.postMessage([1, arr], [arr.buffer]);

	if (str.length === 0) {
		postUint32Array(uint32ArrayWithNumbers(data.length));
		return;
	}

	const rowsToDisplay = [];
	const post = () => postUint32Array(new Uint32Array(rowsToDisplay));

	let postedRowsCount = 0;

	/** @param {any[]} row, @param {number} index */
	const search = (row, index) => {
		if (row[0]?.toLocaleLowerCase().indexOf(str) !== -1) {
			rowsToDisplay.push(index);
			return true;
		}
		return false;
	};

	/** @param {any[]} row, @param {number} index */
	const searchFirst = (row, index) => {
		if (search(row, index)) {
			// first 100 found
			if (rowsToDisplay.length === 100) {
				postedRowsCount = rowsToDisplay.length;
				post();
				forEachCallBack = search;
			}
		} else if ((index === 5_000 || index === data.length - 1) && rowsToDisplay.length === 0) {
			post();
			forEachCallBack = search;
		}
	};

	let forEachCallBack = searchFirst;

	await arrForEachChunk(
		data,
		// chunkSize
		5_000,
		// forEachCallBack
		(row, index) => forEachCallBack(row, index),
		// chunkEndCallBack
		async () => {
			await wait(); // let other tasks go
			if (_str !== str) { return false; }

			if (postedRowsCount !== rowsToDisplay.length) {
				postedRowsCount = rowsToDisplay.length;
				post();
			}

			return true;
		}
	);
};

/**
@typedef {[0, any[][], number, number]} InitMessageData
@typedef {[0, any[]]} InitResponceMessageData

@typedef {[1, string]} FilterMessageData
@typedef {[1, Uint32Array]} FilterResponceMessageData
*/
