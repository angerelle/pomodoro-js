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
    pomodoro.timeRemaining--;
}

function PomodoroController(model) {
    this.pomodoro = model;

}

PomodoroController.prototype.onStart = function() {
  this.pomodoro.start();
};







