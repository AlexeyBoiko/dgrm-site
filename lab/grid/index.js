import { dataGenerate } from './data-generator.js';
import { table } from './table.js';
import { arrExtend, getById, listen, uint32ArrayWithNumbers } from './utils.js';

/** Indexes in {data} to display. Used for filtering and sorting */
const rowsToDisplay = { r: uint32ArrayWithNumbers(1_000_000) };
const data = dataGenerate(500, 20);

const tbl = table(
	// headerDiv
	/** @type {HTMLDivElement} */(getById('hdr')),
	// colRowNumDiv
	/** @type {HTMLDivElement} */(getById('nums')),
	// tableDiv
	/** @type {HTMLDivElement} */(getById('tbl')),
	// rowHeight
	48,
	// cell wifth
	250,
	// cols
	['Name', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'],
	// rowsCount
	1000000,
	// rowsData
	data,
	// rowsToDisplay
	rowsToDisplay
);

const worker = new Worker(new URL('worker.js', import.meta.url), { type: 'module' });
listen(worker, 'message', /** @param {MessageEvent<import('./worker.js').InitResponceMessageData & import('./worker.js').FilterResponceMessageData>} evt */ evt => {
	switch (evt.data[0]) {
		case 1: {
			rowsToDisplay.r = evt.data[1];
			tbl.cellsFill();
			break;
		}
		case 0: arrExtend(data, evt.data[1]); break;
	}
});
worker.postMessage(/** @type {import('./worker.js').InitMessageData} */([0, data, 999_500, 20]));

listen(/** @type {HTMLInputElement} */(getById('serch')), 'input', /** @param {InputEvent & { target: HTMLInputElement}} evt */ evt => {
	worker.postMessage(/** @type {import('./worker.js').FilterMessageData} */([1, evt.target.value.toLowerCase()]));
	tbl.scrollTop();
});
