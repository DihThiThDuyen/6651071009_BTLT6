const colorSelect = document.getElementById("colorSelect");
const removeColorButton = document.getElementById("removeColorButton");

removeColorButton.addEventListener("click", function () {
  if (colorSelect.selectedIndex !== -1) {
    colorSelect.remove(colorSelect.selectedIndex);
  }
});