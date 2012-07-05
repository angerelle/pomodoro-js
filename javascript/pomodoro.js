/**
 * pomodoro.js
 * @author angela.relle
 */


var pomodoroTimer;

function Pomodoro() {
    this.completedPomodoros = 0;
}

Pomodoro.prototype.start = function () {
    this.timeRemaining = 25 * 60;
    var thisPomodoro = this;
    pomodoroTimer = setInterval(function() {
        countdownTime(thisPomodoro);
    }, 1000);
};

function countdownTime(pomodoro) {
    if (pomodoro.timeRemaining == 0) {
        clearInterval(pomodoroTimer);
    } else {
        pomodoro.timeRemaining--;
    }

}








