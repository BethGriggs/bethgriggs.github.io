function updateTime() {
    document.getElementById("clock").innerHTML = moment().format('LT');
}

setInterval(updateTime, 1000);



/* Window Events */

document.getElementById("aboutme-close").addEventListener('click', function () {
    document.getElementById("aboutme").hidden = true;
    setInterval(function () {
        document.getElementById("aboutme").hidden = false
    }, 500);
});