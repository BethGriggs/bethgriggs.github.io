function updateTime() {
    document.getElementById("time").innerHTML = moment().format('LT');
}

setInterval(updateTime, 1000);