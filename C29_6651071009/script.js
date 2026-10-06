const form = document.getElementById("form1");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = form.elements["fname"].value;
  const lastName = form.elements["lname"].value;
  result.textContent = `First name: ${firstName} | Last name: ${lastName}`;
});