const timeDateContainer = document.getElementById('time-date-container');
const time = document.getElementById('time');
const dateContainer = document.getElementById('date');


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

    time.innerHTML = hrsIn12hrFormate + ':' + min + `<span id="am-pm">${amPm}</span>`;
    dateContainer.innerHTML = 
    `
        <span>${DAYS[day]},</span>
        <span>${date} ${MONTHS[month]}</span>
    `
    
}
setInterval(displayTime, 10);
const getWeatherData = () => {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
    })
}
getWeatherData();
