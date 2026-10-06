const insertRowButton = document.getElementById("insertRowButton");

insertRowButton.addEventListener("click", function () {
  const table = document.getElementById("sampleTable");
  const rowNumber = table.rows.length + 1;
  const newRow = table.insertRow();

  newRow.insertCell().textContent = `Row${rowNumber} cell1`;
  newRow.insertCell().textContent = `Row${rowNumber} cell2`;
});