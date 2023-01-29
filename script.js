let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//  Fetch weather details from api and display them
let getWeather = () => {
  let cityValue = cityRef.value;
  //  If input field is empty
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city</h3>`;
  } else {
    //If input fiels is Not empty
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    //Clear the input field
    cityRef.value = "";

    fetch(url)
      .then((response) => response.json())

      //If city name is valid
      .then((data) => {
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather"> ${data.weather[0].main}
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} °</h1>
        <div class="temp-container">
          <div>
            <h4 class="title">min</h4>
            <h4 class="temp">${data.main.temp_min}</h4>
          </div>
          <div>
            <h4 class="title">max</h4>
            <h4 class="temp">${data.main.temp_max}</h4>
          </div>
        </div>
        `;
      })
      //If city name is NOT valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
// window.addEventListener("load", getWeather);

console.log(bug);
