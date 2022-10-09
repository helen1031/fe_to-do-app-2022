const colors = ['lightblue','honeydew','lavender','lightpink','lightGoldenGodYellow','mistyRose','moccasin', 'lightgrey'];

function changeColor() {
  const chosencolor = colors[Math.floor(Math.random() * colors.length)];
  console.log(chosencolor);
  document.body.style.backgroundColor = chosencolor;
  const defaultImg = document.querySelector(".bgImage");
  defaultImg.classList.add("hidden");
}

const bgButton = document.querySelector("#bgButton");
bgButton.addEventListener("click", changeColor);
