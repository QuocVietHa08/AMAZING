var countDate = new Date('Jan 1,2021 00:00:00').getTime();

function newYear() {
    var now = new Date().getTime();
    var gap = countDate - now;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var m = Math.floor((gap % hour) / minute);
    var s = Math.floor((gap % minute) / second);
    var h = Math.floor((gap % day) / hour);
    var d = Math.floor(gap / day);

    document.getElementById('day').innerText = d;

    document.getElementById('hour').innerText = h;

    document.getElementById('minute').innerText = m;

    document.getElementById('second').innerText = s;
}

setInterval(function() {
    newYear();
}, 1000);