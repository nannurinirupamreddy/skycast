const LOC_LOOKUP_URL = "http://api.openweathermap.org/geo/1.0/direct?q=";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

const API_KEY = "7edd267297cea975a2ac36c758378278";

let countries = document.querySelector("#country");

let submitBtn = document.querySelector("#submitBtn");

let form = document.getElementsByTagName("form");

let city;
let lat;
let long;
let selectedCountry;

for (country in countryList) {
  let countryOption = document.createElement("option");
  countryOption.innerText = country;
  countryOption.value = country;
  if (countryList[country] === "US") {
    countryOption.selected = "selected";
  }
  countries.append(countryOption);
}

submitBtn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let cityTag = document.querySelector("#city");
  city = cityTag.value;
  selectedCountry = countries.value;
  const url = `${LOC_LOOKUP_URL}${city},${selectedCountry}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (response.code >= 400) {
    alert("Enter Correct Location!!");
  }
  const data = await response.json();
  console.log(data);
  const lat = data[0].lat;
  const lon = data[0].lon;
  const state = data[0].state;
  const apiCity = data[0].name;
  const weather = await fetch(
    `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  console.log(weather);
  const weatherData = await weather.json();
  console.log(weatherData);
  localStorage.setItem("weatherData", JSON.stringify(weatherData));
  localStorage.setItem("city", apiCity);
  localStorage.setItem("state", state);
  localStorage.setItem("country", selectedCountry);
  localStorage.setItem("lat", lat);
  localStorage.setItem("lon", lon);
  window.location.href = "weather-report.html";
});
