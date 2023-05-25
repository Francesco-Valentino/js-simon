let lessonDate = new Date("May 26, 2023 09:30:00");

let countDown = setInterval(callCaountDown, 1000);

function callCaountDown(){
    let currentDate = new Date().getTime();

    let remainingTime = lessonDate - currentDate;

    let secondsCountdown = Math.floor(remainingTime / 1000);

    secondsCountdown = secondsCountdown % 60;

    document.getElementById("secondsTimer").innerHTML = twoDigits(secondsCountdown);

    console.log(secondsCountdown);

    let minutesCountdown = Math.floor(secondsCountdown / 60);

    minutesCountdown = minutesCountdown % 60;

    document.getElementById("minutesTimer").innerHTML = twoDigits(minutesCountdown);

    console.log(minutesCountdown);

    let hoursCountdown = Math.floor(minutesCountdown / 60);

    hoursCountdown = hoursCountdown % 60;

    document.getElementById("hoursTimer").innerHTML = twoDigits(hoursCountdown);

    
}

function twoDigits(myNumber){
    return myNumber.toString().padStart(2, "0");
}

