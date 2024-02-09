function updateWeather(response) {
  console.log(response.data);
  let temperature = response.data.temperature.current;
  let temperatureElement = document.querySelector("#temp");
  let weatherDescription = response.data.condition.description;
  let weatherDescriptionElement = document.querySelector(
    "#current-temp-description"
  );
  let currentCity = document.querySelector("#current-location-city");
  let feelsLike = Math.round(response.data.temperature.feels_like);
  let feelsLikeElement = document.querySelector("#weather-detail-feels");
  let humidity = response.data.temperature.humidity;
  let humidityElement = document.querySelector("#weather-detail-humidity");
  let windSpeed = response.data.wind.speed;
  let windElement = document.querySelector("#weather-detail-speed");

  currentCity.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  weatherDescriptionElement.innerHTML = weatherDescription;
  feelsLikeElement.innerHTML = feelsLike;
  humidityElement.innerHTML = humidity;
  windElement.innerHTML = windSpeed;
}

function searchCity(city) {
  let apiKey = "c0f7a728c0575391764t3b111d69od7f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(updateWeather);
}

function updateCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  timeElement.innerHTML = formatDate(now);

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", updateCity);

function formatDate(date) {
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();
  let day = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[day];

  return `${currentDay}, ${currentHour}:${currentMinute}`;
}

let now = new Date();

let timeElement = document.querySelector("#current-time");

searchCity("Aarhus");
timeElement.innerHTML = formatDate(now);
