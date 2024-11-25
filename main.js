// Kung Fu Panda Slideshow / Gallery

// //global variables
imgPaths = [
  "po.png",
  "tigress.png",
  "viper.png",
  "monkey.png",
  "mantis.png",
  "crane.png",
];

//create image gallery
let imgContainerEl = document.getElementById("img-container");
for (let i = 0; i < imgPaths.length; i++) {
  imgContainerEl.innerHTML += "<img src='images/" + imgPaths[i] + "'>";
}
