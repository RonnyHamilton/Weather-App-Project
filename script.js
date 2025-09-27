const apikey = "fe8a050457813d99d97e5fff3de5486e";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=`;
const searchinput = document.querySelector(".search input")
const searchicon = document.querySelector("#searchicon")
async function checkweather(city="hosur") {
    const response = await fetch(apiurl + `${city}&appid=${apikey}&units=metric`)
    const data = await response.json()
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humiditypercent").innerHTML = data.main.humidity + "%";
    document.querySelector(".windpercent").innerHTML = data.wind.speed + "km/hr";
    if (data.weather[0].main == "Clouds") {
        document.querySelector(".weather img").src = "cloudy.png"
    }
    if (data.weather[0].main == "Clear") {
        document.querySelector(".weather img").src = "clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        document.querySelector(".weather img").src = "rainy-day.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        document.querySelector(".weather img").src = "drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        document.querySelector(".weather img").src = "mist.png"
    }
    else if (data.weather[0].main == "Snow") {
        document.querySelector(".weather img").src = "snow.png"
    }
    
}

searchicon.addEventListener("click", () => {
    checkweather(searchinput.value)
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".humwind").style.display = "flex";
})