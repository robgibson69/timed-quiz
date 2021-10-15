const startingMinutes = 2.25; // minutes for the quiz. you can also use deciamls 2.5 or 2.25
let startingSeconds = startingMinutes * 60; //total seconds to use for timer
const timerEl = document.getElementById('timer');

myTimer = () => {
    const minutes = Math.floor(startingSeconds / 60);
    let remainingSeconds = startingSeconds % 60;
    
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    timerEl.innerHTML = `${minutes}:${remainingSeconds}`;
    if (startingSeconds == 0) {
        return;
    } else {
        startingSeconds--;
    }
};

setInterval(myTimer, 1000);

