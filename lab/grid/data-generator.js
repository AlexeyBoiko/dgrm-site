/** @param {number} rowsCount, @param {number} colCount */
export const dataGenerate = (rowsCount, colCount) => {
	const rowsData = new Array(rowsCount);
	for (let row = 0; row < rowsCount; row++) {
		const rowCols = rowsData[row] = new Array(colCount);
		rowCols[0] = nameGenerate();
		for (let col = 1; col < colCount; col++) {
			rowCols[col] = Math.floor(Math.random() * 10000);
		}
	}
	return rowsData;
};

const adjective = ['Excited', 'Anxious', 'Overweight', 'Demonic', 'Jumpy', 'Misunderstood', 'Squashed', 'Gargantuan', 'Broad', 'Crooked', 'Curved', 'Deep', 'Even', 'Excited', 'Anxious', 'Overweight', 'Demonic', 'Jumpy', 'Misunderstood', 'Squashed', 'Gargantuan', 'Broad', 'Crooked', 'Curved', 'Deep', 'Even', 'Flat', 'Hilly', 'Jagged', 'Round', 'Shallow', 'Square', 'Steep', 'Straight', 'Thick', 'Thin', 'Cooing', 'Deafening', 'Faint', 'Harsh', 'High-pitched', 'Hissing', 'Hushed', 'Husky', 'Loud', 'Melodic', 'Moaning', 'Mute', 'Noisy', 'Purring', 'Quiet', 'Raspy', 'Screeching', 'Shrill', 'Silent', 'Soft', 'Squeaky', 'Squealing', 'Thundering', 'Voiceless', 'Whispering'];
const object = ['Taco', 'Operating System', 'Sphere', 'Watermelon', 'Cheeseburger', 'Apple Pie', 'Spider', 'Dragon', 'Remote Control', 'Soda', 'Barbie Doll', 'Watch', 'Purple Pen', 'Dollar Bill', 'Stuffed Animal', 'Hair Clip', 'Sunglasses', 'T-shirt', 'Purse', 'Towel', 'Hat', 'Camera', 'Hand Sanitizer Bottle', 'Photo', 'Dog Bone', 'Hair Brush', 'Birthday Card'];
const nameGenerate = () => adjective[Math.floor(Math.random() * adjective.length)] + ' ' + object[Math.floor(Math.random() * object.length)];
