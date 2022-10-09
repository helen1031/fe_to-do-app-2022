const APIKEY = "98ef2c8a9e1ed1996da6bf06e26a0996";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
  console.log(url);
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main}  ${data.main.temp}℃`;
  });
}

function onGeoError(){
  alert("Can't find your position");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);