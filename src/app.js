let weatherDate = document.querySelector("#date");
let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[currentTime.getDay()];

let currentHour = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();

weatherDate.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;

///////////////////////////////////////////////////////////////////
function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#hum").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#descr").innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
  let myKey = "caa1fb6b2823abb39ce4e3a2dd989bdf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function submit(event) {
  event.preventDefault();
  let cityinput = document.querySelector("#city-input").value;
  searchCity(cityinput);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", submit);
