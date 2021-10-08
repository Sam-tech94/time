// 24 hours format

/*function currentTime() {
    let date = new Date(); // create object of Date class
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    // adding the time to the div
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;

    let t = setTimeout(() => currentTime(), 1000);
}

const updateTime = k => (k < 10) ? "0" + k : k;

currentTime();*/

//--------------------------------------------

// 12 hours format

function currentTime() {
    let date = new Date(); // create object of Date class
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour === 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    // adding time to the div
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday;

    let t = setTimeout(() => currentTime(), 1000);
}

const updateTime = k => (k < 10) ? "0" + k : k;

currentTime();