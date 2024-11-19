// DOM

/** @param {string=} className } */
export const div = className => {
	const d = document.createElement('div');
	if (className) { d.className = className; }
	return d;
};

/** @param {string} str, @param {string=} className */
export const divWithContent = (str, className) => {
	const d = div(className);
	d.textContent = str;
	return d;
};

/** @param {Partial<CSSStyleDeclaration>} styles */
export const divWithStyles = styles => {
	const d = div();
	setStyles(d, styles);
	return d;
};

/** @param {HTMLDivElement} el, @param {Partial<CSSStyleDeclaration>} styles */
const setStyles = (el, styles) =>
	Object.entries(styles).forEach(style => { el.style[style[0]] = style[1]; });

/**
 * @param {Element | GlobalEventHandlers | EventTarget} el
 * @param {string} type
 * @param {EventListenerOrEventListenerObject} listener
 * */
export const listen = (el, type, listener) => {
	el.addEventListener(type, listener, { passive: true });
	return listener;
};

/** @param {string} id */
export const getById = id => document.getElementById(id);

// array

/** @param {any[]} srcArray, @param {any[]} arrayToAdd */
export const arrExtend = (srcArray, arrayToAdd) => arrayToAdd.forEach(el => srcArray.push(el));

/** @param {number} length */
export const uint32ArrayWithNumbers = length => {
	const array = new Uint32Array(length);
	for (let ii = 0; ii < length; ii++) {
		array[ii] = ii;
	}
	return array;
};

// /**
//  * @template T
//  * @param {T[]} arr
//  * @param {number} firstChunkSize
//  * @param {number} chunkSize
//  * @param {()=>void} firstChunkCallBack
//  * @param {()=>void} chunkCallBack
//  * @param {(el:T)=>void} forEachCallBack
//  */
// export const arrForEachChunk = (arr, firstChunkSize, chunkSize, firstChunkCallBack, chunkCallBack, forEachCallBack) => {
// 	let row = 0;

// 	/** @param {number} size */
// 	const processChunk = size => {
// 		const chunkLastIndex = row + size;
// 		for (; row < chunkLastIndex; row++) {
// 			forEachCallBack(arr[row]);
// 		}
// 	};

// 	// first chunk
// 	processChunk(Math.min(arr.length, firstChunkSize));
// 	firstChunkCallBack();

// 	// next chunks
// 	{
// 		/** @param {number} size */
// 		const process = size => {
// 			processChunk(size);
// 			chunkCallBack();
// 		};

// 		const fullChunksCount = Math.trunc((arr.length - row) / chunkSize);
// 		for (let chunkIndex = 0; chunkIndex < fullChunksCount; chunkIndex++) {
// 			process(chunkSize);
// 		}
// 		process(arr.length - row);
// 	}
// };
/**
 * @template T
 * @param {T[]} arr
 * @param {number} chunkSize
 * @param {(el:T, ii:number)=>void} forEachCallBack
 * @param {()=>Promise<boolean>} chunkEndCallBack
 */
export const arrForEachChunk = async (arr, chunkSize, forEachCallBack, chunkEndCallBack) => {
	let ii = 0;

	/** @param {number} size */
	const processChunk = async size => {
		const chunkLastIndex = ii + size;
		for (; ii < chunkLastIndex; ii++) {
			forEachCallBack(arr[ii], ii);
		}
		return await chunkEndCallBack();
	};

	const fullChunksCount = Math.trunc(arr.length / chunkSize);
	for (let chunkIndex = 0; chunkIndex < fullChunksCount; chunkIndex++) {
		if (!await processChunk(chunkSize)) { return; }
	}
	await processChunk(arr.length - ii);
};

// events

/** @param {number=} ms */
export const wait = ms =>	new Promise(resolve => setTimeout(resolve, ms ?? 0));

// /** @param {Function} func, @param {number} ms */
// export const throttle = (func, ms) => {
// 	let isThrottled = false;
// 	let savedArgs;
// 	let savedThis;

// 	function wrapper() {
// 		if (isThrottled) {
// 			savedArgs = arguments;
// 			savedThis = this;
// 			return;
// 		}

// 		func.apply(this, arguments);

// 		isThrottled = true;

// 		setTimeout(function () {
// 			isThrottled = false;
// 			if (savedArgs) {
// 				wrapper.apply(savedThis, savedArgs);
// 				savedArgs = savedThis = null;
// 			}
// 		}, ms);
// 	}

// 	return wrapper;
// };
