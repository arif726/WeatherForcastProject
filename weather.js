const timeDateContainer = document.getElementById('time-date-container');
const time = document.getElementById('time');
const dateContainer = document.getElementById('date');
const currentWeatherItem = document.getElementById('current-weather-items');


const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'september', 'October', 'November', 'December'];

const API_KEY = 'b1d58992db58680fd6cccfc5c33c993c';

const displayTime = () => {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const hrsIn12hrFormate = hrs >= 13 ? hrs % 12 : hrs;
    const min = dateTime.getMinutes();
    const amPm = hrs <= 12 ? 'AM' : 'PM';
    const date = dateTime.getDate();
    const month = dateTime.getMonth();
    const day = dateTime.getDay();

    time.innerHTML = hrsIn12hrFormate + ':' + min +`<span id="am-pm">${amPm}</span>`;

    dateContainer.innerHTML = 
    `
    <span>${DAYS[day]},</span>
    <span>${date} ${MONTHS[month]}</span>
    
    `
}
setInterval(displayTime, 10);

const getLocation =()=>{
navigator.geolocation.getCurrentPosition((success)=>{
    let {latitude, longitude}=success.coords;

    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
    showWeatherData(data);
        
    })
})
};
getLocation();
const showWeatherData=(data)=>{
    console.log(data);
    currentWeatherItem.innerHTML = `
    <div class="weather-items">
              <span>Humidity</span>
              <span>${data.main.humidity
              }</span>
            </div>
            <div class="weather-items">
              <span>Pressure</span>
              <span>${data.main.pressure}</span>
            </div>
            <div class="weather-items">
              <span>Wind speed</span>
              <span>${data.wind.speed}</span>
            </div>
            <div class="weather-items">
              <span>Sunrise</span>
              <span>${data.sys.sunrise}</span>
            </div>
            <div class="weather-items">
              <span>Sunset</span>
              <span>${data.sys.sunset}</span>
            </div>
    `  
}
