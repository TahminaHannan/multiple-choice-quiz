var mainEl = document.getElementById("main");
var timeEl = document.querySelector(".time");
var timer = null;
var secondsLeft = 60;

document.getElementById("start").addEventListener("click", function() {
    if (timer === null) {
        timer = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = "Time: " + secondsLeft + " seconds remaining";
            if(secondsLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
});

setTime();

