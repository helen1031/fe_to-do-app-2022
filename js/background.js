const images = [
  "morning.jpg",
  "afternoon.jpg",
  "sunset.jpg",
  "evening.jpg"
]

function backgoundHandler() {
  const date = new Date();
  const hours = (date.getHours());
  
  if (6 <= hours && hours <= 11){
    return 0;
  }else if (12 <= hours && hours <= 17) {
    return 1;
  } else if (18 <= hours && hours <= 23) {
    return 2;
  } else {
    return 3;
  }
}

//const chosenBackground = images[Math.floor(Math.random() * images.length)];
const chosenBackground  = images[backgoundHandler()];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenBackground}`;
bgImage.classList.add('bgImage');
document.body.prepend(bgImage);