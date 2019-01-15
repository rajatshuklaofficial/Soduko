let board = [
	['.','.','.','.','.','.','.',6,'.'],
	['.','.',7,3,'.','.',9,'.','.'],
	['.','.',8,9,'.','.','.','.','.'],
	['.',7,1,'.','.','.','.','.','.'],
	['.','.','.','.','.','.','.','.',8],
	[8,'.','.','.',5,'.',6,'.',4],
	['.',1,'.',2,'.','.','.',9,'.'],
	[2,'.','.','.','.',4,'.','.','.'],
	['.',6,9,'.','.','.','.',7,'.'],
];


function init(rows, columns) {
	for(var i =0; i<9;i++) {
		rows.push({});
		columns.push({});
		boxes.push({});
	}
}
function checkSudoko(board) {
	rows = [];
	columns = [];
	boxes = [];
	init(rows, columns);
	for(var i =0; i<9; i++) {
		for(var j=0; j<9; j++) {
			entry = board[i][j]
			if(entry != '.') {
				entry = parseInt(entry);
				boxIndex = parseInt(i/3)*3 + parseInt(j/3);
				rows[i][entry] = rows[i][entry] ? rows[i][entry] + 1 : 1;
				columns[j][entry] = columns[j][entry] ? columns[j][entry] + 1 : 1;
				boxes[boxIndex][entry] = boxes[boxIndex][entry] ? boxes[boxIndex][entry] + 1 : 1;
				if(rows[i][entry] > 1 || columns[j][entry] > 1 || boxes[boxIndex][entry] > 1) {
					return false;
				}
			}
		}
	}
	return true;
}

console.log(checkSudoko(board))