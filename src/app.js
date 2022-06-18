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

function celsiusToFahrenheit(celsius) {
  let temperNow = document.querySelector("#temp");
  let fahrenheit = (celsius * 9) / 5 + 32;
  temperNow.innerHTML = Math.round(fahrenheit);
  console.log(fahrenheit);
  return fahrenheit;
}
function changeUnitsCtoF(event) {
  event.preventDefault();
  let temperCurrent = document.querySelector("#temp").innerHTML;
  console.log(temperCurrent);
  let temperNowInF = celsiusToFahrenheit(temperCurrent);
  console.log(temperNowInF);
  return temperCurrent;
}
function changeUnitsFtoC(event) {
  event.preventDefault();
  let inputCityName = document.querySelector("#city").innerHTML;
  console.log(inputCityName);
  let apiKey = "aa1fb6b2823abb39ce4e3a2dd989bdf";
  let apiUrlCurrentCity = `https://api.openweathermap.org/data/2.5/weather?q=${inputCityName}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrlCurrentCity).then(currentTemp);
  return temperNow;
}

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#hum").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#descr").innerHTML =
    response.data.weather[0].description;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
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

let temperNow = document.querySelector("#temp").innerText;
let temperCel = document.querySelector("#temp").innerText;
let unitCel = document.querySelector("#celsius");
let unitFahr = document.querySelector("#fahrenheit");
unitFahr.addEventListener("click", changeUnitsCtoF);
unitCel.addEventListener("click", changeUnitsFtoC);
