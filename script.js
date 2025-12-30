let search = document.querySelector("#search");
let cityname=document.querySelector("#maintitle");
let searchvalue,mainname;
let weatherinfottexth1=document.querySelector(".weatherinfottext h1");
let weatherinfottextp=document.querySelector(".weatherinfottext p");
let temp=document.querySelector(".weathernowh1");
let min_temp=document.querySelector(".min_temp h2");
let max_temp=document.querySelector(".max_temp h2");
let atm_pressure=document.querySelector(".atm_pressure h2");
let humidity=document.querySelector(".humidity h2");
let img=document.querySelector("#mainimg");
let leftbottom=document.querySelector(".leftbottom");
let iconimg=document.querySelector("#icon");
fetch(`https://api.openweathermap.org/data/2.5/weather?q=california&appid=fe8a050457813d99d97e5fff3de5486e`)
    .then(data=>data.json())
    .then(jsonfile=>{
          weatherinfottexth1.innerHTML=jsonfile.weather[0].main;
        weatherinfottextp.innerHTML=`${jsonfile.weather[0].description} in ${cityname.innerHTML}`;
        min_temp.innerHTML=`${Math.round(jsonfile.main.temp_min-273.15)}°C`;
        max_temp.innerHTML=`${Math.round(jsonfile.main.temp_max-273.15)}°C`;
        atm_pressure.innerHTML=`${jsonfile.main.pressure}Pa`;
        humidity.innerHTML=`${jsonfile.main.humidity}%`;
         temp.innerHTML=`${Math.round(jsonfile.main.temp-273.15)}°C`;
           let dt = jsonfile.dt;
        let timezone = jsonfile.timezone;
        let sunrise = jsonfile.sys.sunrise;
        let sunset = jsonfile.sys.sunset;

        let localTime = dt + timezone;
        let localSunrise = sunrise + timezone;
        let localSunset = sunset + timezone;

        let isDay = localTime >= localSunrise && localTime < localSunset;
         if( weatherinfottexth1.innerHTML=="Mist" || weatherinfottexth1.innerHTML=="Haze" ){
            img.src=`icons/mist_day1.png`;
        }
        if( weatherinfottexth1.innerHTML=="Clouds"){
            img.src= isDay ? `icons/clouds_day.svg`: `icons/clouds_night.svg`;
        }
        if( weatherinfottexth1.innerHTML=="Rain"){
            img.src= isDay ? `icons/thunder.svg`: `icons/night_rain.svg`;
        }
       
         if( weatherinfottexth1.innerHTML=="Clear"){
            img.src= isDay ? `icons/sun.svg`: `icons/moon.svg`;
        }
    })

document.querySelector("#btn").addEventListener("click", () => {
    searchvalue = search.value.trim();
    console.log("search:"+searchvalue);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=fe8a050457813d99d97e5fff3de5486e`)
    .then(data=>data.json())
    .then(jsonfile=>{
        console.log(jsonfile);
        cityname.innerHTML=jsonfile.name;
        weatherinfottexth1.innerHTML=jsonfile.weather[0].main;
        weatherinfottextp.innerHTML=`${jsonfile.weather[0].description} in ${cityname.innerHTML}`;
        temp.innerHTML=`${Math.round(jsonfile.main.temp-273.15)}°C`;
        min_temp.innerHTML=`${Math.round(jsonfile.main.temp_min-273.15)}°C`;
        max_temp.innerHTML=`${Math.round(jsonfile.main.temp_max-273.15)}°C`;
        atm_pressure.innerHTML=`${jsonfile.main.pressure}Pa`;
        humidity.innerHTML=`${jsonfile.main.humidity}%`;
       

        let dt = jsonfile.dt;
        let timezone = jsonfile.timezone;
        let sunrise = jsonfile.sys.sunrise;
        let sunset = jsonfile.sys.sunset;

        let localTime = dt + timezone;
        let localSunrise = sunrise + timezone;
        let localSunset = sunset + timezone;

        let isDay = localTime >= localSunrise && localTime < localSunset;
        if( weatherinfottexth1.innerHTML=="Mist" || weatherinfottexth1.innerHTML=="Haze" ){
            img.src=`icons/mist_day1.png`;
        }
        if( weatherinfottexth1.innerHTML=="Clouds"){
            img.src= isDay ? `icons/clouds_day.svg`: `icons/clouds_night.svg`;
        }
        if( weatherinfottexth1.innerHTML=="Rain"){
            img.src= isDay ? `icons/rainy_day.svg`: `icons/rainy_night.svg`;
        }
        if( weatherinfottexth1.innerHTML=="Rain"){
            img.src= isDay ? `icons/rainy_day.svg`: `icons/rainy_night.svg`;
        }
         if( weatherinfottexth1.innerHTML=="Clear"){
            img.src= isDay ? `icons/sun.svg`: `icons/moon.svg`;
        }
        console.log(isDay ? "DAY" : "NIGHT");
        const x=`<div class="recents">
                        <img id="icon" src="${img.src}">
                        <div class="recentsdetails">
                            <h3>${jsonfile.weather[0].main}</h3>
                            <p>${jsonfile.name}</p>
                            <div class="temp" style="margin-top:-5px  top:0px;">Temp: ${Math.round(eval(jsonfile.main.temp-273.15))}°C</div>
                        </div>
                        
                    </div>`;
        leftbottom.insertAdjacentHTML("beforeend",x);
    }); 
});
