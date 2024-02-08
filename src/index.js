function updateCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let currentCity = document.querySelector("#current-location-city");

  currentCity.innerHTML = searchInput.value;

  timeElement.innerHTML = formatDate(now);
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
