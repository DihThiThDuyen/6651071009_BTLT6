function insert_Row() {
  // Trình duyệt tự bọc <tr> vào <tbody>, nên đếm hàng qua selector "tr" của bảng.
  const rowNumber = $("#sampleTable tr").length + 1;

  $("#sampleTable").append(
    `<tr><td>Row${rowNumber} cell1</td><td>Row${rowNumber} cell2</td></tr>`
  );
}
