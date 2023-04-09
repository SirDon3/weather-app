// State 

let currentCity = "Helsinki"
let units = "metric"

// Selectors

let city = document.querySelector(".weather_city")


function getWeather(){
    const API_Key = '64f60853740a1ee3ba20d0fb595c97d5'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_Key}&units=${units}`).then(res => res.json())
    .then(data => {
        city.innerHTML =`${data.name}, ${data.sys.country}`
    })
}

document.body.addEventListener("load", getWeather())
