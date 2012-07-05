/**
 * PomodoroDomSpec.js
 * @author Angela Relle
 */

describe("When the start button is pressed", function () {

    var pomodoro;

    beforeEach(function () {
        pomodoro = new Pomodoro();
        spyOn(pomodoro, 'start');

        $('body').append('<div id="fixture"><button id="startButton" type="button">Start</button></div>') ;


        var startButton = $('#startButton')[0];
        startButton.onclick = function () {
            startPomodoro();
        };

        startButton.click();


    });

    afterEach(function () {
        clearInterval(pomodoroTimer);
        $('#fixture').remove();
    });



    it("then the pomodoro should be started", function () {
        expect(pomodoro.start).toHaveBeenCalled();
    });

    function startPomodoro() {
        pomodoro.start();
    }
});
