
var hours = document.getElementById('hour');
var minute = document.getElementById('min');
var second = document.getElementById('sec');
var milliSecond = document.getElementById('millSec');
var start = document.getElementById('start');
var main = document.getElementById('list');
var raeding = document.getElementById('raeding');

var millSec = 0;
var sec = 0;
var min = 0;
var hour = 0;
var timer;

function startTimer() {
    timer = setInterval(function () {
        millSec++;
        milliSecond.innerHTML = millSec;
        if (millSec >= 100) {
            sec++;
            second.innerHTML = sec;
            millSec = 0;
        }
        else if (sec >= 60) {
            min++;
            minute.innerHTML = min;
            sec = 0;
        }
        else if (min >= 60) {
            hour++;
            hours.innerHTML = hour;
            minute = 0;
        }
        start.disabled = true;
    }, 10)
}

function resetTimer() {

    hour = 0;
    min = 0;
    sec = 0;
    millSec = 0;
    hours.innerHTML = hour;
    minute.innerHTML = min;
    second.innerHTML = sec;
    milliSecond.innerHTML = millSec;
}

function stopTimer() {
    clearInterval(timer);
    start.disabled = false;
    // creating list
    var list= document.createElement('list');
    list.innerText = (raeding.innerText);
    list.setAttribute('id','list')
    main.appendChild(list); 
    // creating delete button
    var button= document.createElement('button');
    button.innerHTML = ('<i class="far fa-times-circle fa-2x"></i>');
    button.setAttribute('onclick','deleteIt(this)');
    list.appendChild(button);
}
//Deleting list
function deleteIt(e){
    e.parentNode.remove()
}
