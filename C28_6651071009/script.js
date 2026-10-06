const styleButton = document.getElementById("jsstyle");

styleButton.addEventListener("click", function () {
  const paragraph = document.getElementById("text");
  paragraph.style.fontSize = "20px";
  paragraph.style.fontFamily = "Arial, sans-serif";
  paragraph.style.color = "blue";
});