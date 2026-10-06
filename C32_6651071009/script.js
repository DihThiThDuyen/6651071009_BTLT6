const images = [
  {
    src: "https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    width: 240,
    height: 160
  },
  {
    src: "https://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    width: 320,
    height: 195
  },
  {
    src: "https://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
    width: 500,
    height: 343
  }
];

const showImageButton = document.getElementById("showImageButton");
const randomImage = document.getElementById("randomImage");

showImageButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];

  randomImage.src = selectedImage.src;
  randomImage.width = selectedImage.width;
  randomImage.height = selectedImage.height;
  randomImage.hidden = false;
});