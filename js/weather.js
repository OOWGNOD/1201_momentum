
const API_KEY = "c724484003d150c32fdd0429c77ab048"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json()).
    then(data =>{
        const weatherContainer = document.querySelector("#weather span:first-child")
        const cityContainer = document.querySelector("#weather span:last-child")
        cityContainer.innerText = `${data.name}`; 
        weatherContainer.innerText = `${data.weather[0].main}  ${data.main.temp}` ;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);