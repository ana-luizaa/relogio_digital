const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function updateTime() {
    let dateToday = new Date();
    let brtOffset = -3 * 60 * 60 * 1000; 
    dateToday.setTime(dateToday.getTime() + brtOffset);
    
    let hr = dateToday.getUTCHours(); 
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}

updateTime();

const relogio = setInterval(updateTime, 1000);