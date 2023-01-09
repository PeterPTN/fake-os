export default function getTime() {
    const time = document.getElementById("time");
    const date = document.getElementById("date");

    let pastNoon = false;
    let currTime = new Date();
    let year = currTime.getFullYear();
    let month = currTime.getMonth() + 1;
    let day = currTime.getDate();
    let hours = currTime.getHours();
    let minutes = currTime.getMinutes();

    if (hours > 12) {
        hours -= 12
        pastNoon = true;
    } else {
        hours = currTime.getHours();
        pastNoon = false;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    } else {
        minutes = currTime.getMinutes();
    }

    if (month < 10) {
        month = `0${month}`
    } else {
        month = currTime.getMonth() + 1;
    }

    time.innerText = `${hours}:${minutes} ${pastNoon ? `PM` : 'AM'}`;
    date.innerText = `${day}/${month}/${year}`;
}