// Select color input
// Select size input

// Initial values.
let height = 1;
let width = 1;
let color = $("#colorPicker").val();
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
  $("td").bind("contextmenu", function(e) {
    e.preventDefault();
  });
}

// When size is submitted by the user, call makeGrid().
$("#sizePicker").submit(function(e) {
  e.preventDefault();
  let height = $("#input_height").val();
  let width = $("#input_width").val();

  makeGrid(height, width);
});

// When color is changed by the user, set color value.
$("#colorPicker").change(function() {
  color = $("#colorPicker").val();
});

// Delegated color fill for table cells.
table.on("click", "td", function() {
  $(this).css("background-color", color);
});
