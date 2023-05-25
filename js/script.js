let currentDate = new Date().getTime();

console.log(currentDate);

let lessonDate = new Date("May 26, 2023 09:30:00");

console.log(lessonDate);

let remainingTime = lessonDate - currentDate;

let countDown = setInterval(callCaountDown, 1000);

function callCaountDown(){
    let daysCountDown = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    console.log(daysCountDown);

    document.getElementById("daysTimer").innerHTML = daysCountDown;
}

