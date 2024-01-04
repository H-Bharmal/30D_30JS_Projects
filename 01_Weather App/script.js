const apiKey = "6c0e95b711251cfe925ba8d4f773e855";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

const inputLocation = document.querySelector('input[name="city"]')
const searchBtn = document.getElementById("searchBtn");
const weatherImage = document.querySelector(".weather-icon");
const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const humidityValue = document.querySelector(".humidity");
const windValue = document.querySelector(".wind");
const errorMsg = document.querySelector(".error");

async function searchWeather(city){
    console.log(city);
    const data = await getWeather(city);
    if(data == false){
        console.log("Error");
        errorMsg.style.display = "block";
        document.querySelector(".weather").style.display="none";
        return ;
    }
    document.querySelector(".weather").style.display="block";
    errorMsg.style.display = "none";
    const weather = data.weatherCondition;
    console.log(weather);

    setWeatherIcon(weather);
    cityName.innerHTML = data.cityName;
    temp.innerHTML=data.temp+"° C";
    humidityValue.innerHTML = data.humidity + "%";
    windValue.innerHTML = data.wind + " Km/hr";

}

searchBtn.addEventListener('click',(e)=>{
    const city = inputLocation.value;
    if(city ==""){
        alert("No Location Entered");
        return ;
    }
    searchWeather(city);
});

function setWeatherIcon(weather){
    // if(weather == "Clear"){
    //     weatherImage.setAttribute('src',"Images/clear.png");
    // }
    // else if(weather == "Mist"){
    //     weatherImage.setAttribute('src',"Images/mist.png");
    // }

    weather = weather.toLowerCase();
    weatherImage.setAttribute('src',`Images/${weather}.png`);
    
}
async function getWeather(city){
    
    const response = await fetch(apiURL+ `&q=${city}`);
    console.log(response.status);
    if(response.status == 404){
        return false;
    }
    else{
        const data =await response.json();
        // console.log(data);
        // console.log(data.main.temp);
        return {
            "cityName" : data.name,
            "weatherCondition" : data.weather[0].main,
            "weatherConditionDesc" : data.weather.description,
            temp : data.main.temp,
            humidity : data.main.humidity,
            wind : data.wind.speed
        }
    }
}
