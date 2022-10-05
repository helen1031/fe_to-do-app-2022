const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg"
]

const chosenBackground = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenBackground}`;
document.body.appendChild(bgImage);