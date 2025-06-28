const city = localStorage.getItem("city");
const state = localStorage.getItem("state");
const country = localStorage.getItem("country");

if (city == null || state == null || country == null) {
  window.location.href = "index.html";
} else {
  const locationString = city + ", " + state + ", " + country;

  let locationElement = document.querySelector("#location");

  locationElement.innerText = locationString;

  let weatherType = document.querySelector("#weather-type");
  let weatherTpeDesc = document.querySelector("#weather-type-desc");

  let data = JSON.parse(localStorage.getItem("weatherData"));

  //     const weatherType = weatherData.weather;
  //   const weatherTypei = weatherType[0];

  weatherType.innerText = data.weather[0].main;
  weatherTpeDesc.innerText = data.weather[0].description;

  let realTemp = data.main.temp;
  let feelsLike = data.main.feels_like;
  let pressure = Math.round(((data.main.pressure * 100) / 3386) * 100) / 100;
  let humidity = data.main.humidity;
  let temp_max = data.main.temp_max;
  let temp_min = data.main.temp_min;
  let lat = localStorage.getItem("lat");
  let lon = localStorage.getItem("lon");

  let temp = document.querySelector("#tempDisp");
  let tempDispText = document.querySelector("#tempDispText");
  let feelsLikeText = document.querySelector("#feelsLikeText");
  let pressureTempText = document.querySelector("#pressureTempText");
  let humidityTempText = document.querySelector("#humidityTempText");
  let maxTempText = document.querySelector("#temp-max-text");
  let minTempText = document.querySelector("#temp-min-text");
  let latText = document.querySelector("#lat-text");
  let lonText = document.querySelector("#lon-text");

  temp.innerText = realTemp + "°C";
  tempDispText.innerText = realTemp + "°C";

  feelsLikeText.innerText = feelsLike + "°C";

  pressureTempText.innerText = pressure + " inHg";

  humidityTempText.innerText = humidity + "%";

  maxTempText.innerText = temp_max + "°C";
  minTempText.innerText = temp_min + "°C";

  latText.innerText = lat;
  lonText.innerText = lon;
}
