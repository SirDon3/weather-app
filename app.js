// State 

let currentCity = "Chicago"
let units = "metric"

// Selectors

let city = document.querySelector(".weather_city");
let datetime = document.querySelector(".weather_datetime");
let weatherForcast = document.querySelector(".weather_forecast");
let weatherTemperature = document.querySelector(".weather_temperature");
let weatherIcon = document.querySelector(".weather_icon");
let weatherMinMax = document.querySelector(".weather_minmax");
let weatherRealfeel = document.querySelector(".weather_realfeel");
let weatherHumidity = document.querySelector(".weather_humidity");
let weatherWind = document.querySelector(".weather_wind");
let weatherPressure = document.querySelector(".weather_pressure");


//Search 

document.querySelector(".weather_search").addEventListener('submit', e => {
    let search = document.querySelector(".weather_searchform");

    //prevent default action
    e.preventDefault();

    //change current city
    currentCity = search.value

    //get weather forecast 

    getWeather();
})

// function convertTimeStamp(timestamp, timezone){
//     const convertTimezone = timezone / 3600 // convert seconds to hours 

//     const date = new Date(timestamp * 1000)
   
//     const options = {
//        weekday: "long",
//        day: "numeric",
//        month: "long",
//        year: "numeric",
//        hour: "numeric",
//        minute: "numeric",
//        timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
//        hour12: true,
//    }

//    return date.toLocaleString("en-US", options) // 


// FACING ISSUE Uncaught (in promise) RangeError: Invalid time zone specified: Etc/GMT-5.5)
// Unable to reslove
  
// }




// convert country code to name

function convertCountryCode(country){
    let regionName = new Intl.DisplayNames(["en"], {type: "region"});
    return regionName.of(country);
}


function getWeather(){
    const API_Key = '59618624f2e4aeffe559c95b41d84083'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_Key}&units=${units}`).then(res => res.json())
    .then(data => {
        console.log(data);
        city.innerHTML =`${data.name}, ${convertCountryCode(data.sys.country)}`
        // datetime.innerHTML = convertTimeStamp(data.dt, data.timezone)
        weatherForcast.innerHTML = `<p>${data.weather[0].main}`
        weatherTemperature.innerHTML = `${data.main.temp.toFixed()}&#176`
        weatherIcon.innerHTML = ` <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="Weather Icon">`
        weatherMinMax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176</p>
                                        <p>Max: ${data.main.temp_max.toFixed()}&#176</p>`
        weatherRealfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
        weatherHumidity.innerHTML = `${data.main.humidity.toFixed()}%`
        weatherWind.innerHTML = `${data.wind.speed} m/s`
        weatherPressure.innerHTML = `${data.main.pressure.toFixed()} hPa`
    })
}

document.body.addEventListener("load", getWeather());
