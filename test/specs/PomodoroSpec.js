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
        jasmine.Clock.useMock();       // Think you need to put this in before any timers are set
        pomodoro = new Pomodoro();
        pomodoro.start();

    });

    afterEach(function () {
        clearInterval(pomodoroTimer);
    });

    it("then the time remaining should be set to 25 minutes", function () {
        expect(pomodoro.timeRemaining).toBe(25 * 60);
    });

    it("and the time should start counting down in seconds", function () {
        jasmine.Clock.tick(1100);
        expect(pomodoro.timeRemaining).toBe((25 * 60 ) - 1);
     });

    it("and after 25 minutes the time remaining should be zero", function () {
        jasmine.Clock.tick(25 * 60 * 1000);
        expect(pomodoro.timeRemaining).toBe(0);
    });

    it("and beyond 25 minutes the time should still be zero", function () {
        jasmine.Clock.tick(26 * 60 * 1000);
        expect(pomodoro.timeRemaining).toBe(0);
    });

 });



