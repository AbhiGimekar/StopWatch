const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let curTime = 0;
let pause = true;
let intervalID;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if (pause) {
        pause = false;
        startTime = Date.now() - elapsedTime;
        intervalID = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if (!pause) {
        pause = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalID);
    }
});
resetBtn.addEventListener("click", () => {

    pause = true;
    clearInterval(intervalID);

    startTime = 0;
    elapsedTime = 0;
    curTime = 0;

    hrs = 0;
    mins = 0;
    secs = 0;

    timeDisplay.textContent = "00:00:00";
});


function updateTime() {

    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = addZero(secs);
    mins = addZero(mins);
    hrs = addZero(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function addZero(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
} 