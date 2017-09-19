// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let height = 1;
let width = 1;
let color = "#000000";
const table = $("#pixel_canvas");

// Create Table-based grid using user supplied height x width.
function makeGrid(height, width) {
  table.empty();
  for (let row = 0; row < height; row++) {
    let tableRow = "<tr>";
    for (let col = 0; col < width; col++) {
      tableRow = tableRow + "<td></td>";
    }
    tableRow = tableRow + "</tr>";
    table.append(tableRow);
  }
}

//
$("#sizePicker").submit(function(e) {
  e.preventDefault();
  let height = $("#input_height").val();
  let width = $("#input_width").val();

  makeGrid(height, width);
});
