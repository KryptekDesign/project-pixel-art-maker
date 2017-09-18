// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let height = 1;
let width = 1;
let color = '#000000';
const table = $('#pixel_canvas');

function makeGrid(height, width) {
  clearGrid();
	for (let row = 0; row < height; row++) {
    let tableRow = '<tr>';
		for (let col = 0; col < width; col++) {
			tableRow = tableRow + '<td></td>';
    }
    tableRow = tableRow + '</tr>';
    table.append(tableRow);
	}
}

// Clears Table-based grid.
function clearGrid() {
  table.empty();
}
