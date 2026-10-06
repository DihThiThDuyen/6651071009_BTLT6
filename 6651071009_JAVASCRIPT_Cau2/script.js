$(function () {
  $("#form1").on("submit", function (event) {
    event.preventDefault();

    const firstName = $("#fname").val().trim();
    const lastName = $("#lname").val().trim();
    $("#result").text(`Họ và tên: ${firstName} ${lastName}`.trim());
  });
});