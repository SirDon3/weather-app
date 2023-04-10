// State 

let currentCity = "Kandy"
let units = "metric"

// Selectors

let city = document.querySelector(".weather_city")
let datetime = document.querySelector(".weather_datetime")



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
    return regionName.of(country)
}


function getWeather(){
    const API_Key = '59618624f2e4aeffe559c95b41d84083'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_Key}&units=${units}`).then(res => res.json())
    .then(data => {
        console.log(data)
        city.innerHTML =`${data.name}, ${convertCountryCode(data.sys.country)}`
        datetime.innerHTML = convertTimeStamp(data.dt, data.timezone)
    })
}

document.body.addEventListener("load", getWeather())
