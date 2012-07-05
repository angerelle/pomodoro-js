/**
 * pomodoro.js
 * @author angela.relle
 */



describe("When the application has first started", function () {

    var pomodoro;

    beforeEach(function () {
       pomodoro = new Pomodoro();
    });

    it("then the number of completed pomodoros should be zero", function () {
        expect(pomodoro.completedPomodoros).toEqual(0);
    });

});


describe("When a pomodoro is started", function() {
    var pomodoro;

    beforeEach(function () {
        pomodoro = new Pomodoro();
    });

    it("then the time remaining should be set to 25 minutes", function () {
        pomodoro.start();
        expect(pomodoro.timeRemaining).toBe(25 * 60);
    });

    it("and the time should start counting down", function () {
       pomodoro.start();
        waitsFor(function () {
            return pomodoro.timeRemaining == (25 * 60) - 1;
        }, "by the time a second has passed, the time should have counted down one second", 1100);
    });
})


