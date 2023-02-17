const timeDateContainer = document.getElementById('time-date-container');
const time = document.getElementById('time');
const date = document.getElementById('date');


const DAYS=[]
const displayTime = () => {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const hrsIn12hrFormate = hrs >= 13 ? hrs % 12 : hrs;
    const min = dateTime.getMinutes();
    const amPm = hrs <= 12 ? 'AM' : 'PM';
    const date = dateTime.getDate();
    const month = dateTime.getMonth();
    const day = dateTime.getDay();

    time.innerHTML = hrsIn12hrFormate + ':' + min +`<span id="am-pm">${amPm}</span>` ;
    
}
setInterval(displayTime, 10);