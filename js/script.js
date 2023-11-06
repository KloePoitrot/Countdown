// Initiate final date
let finalDate = new Date("mars 1, 2024 14:45:00").getTime();


function timer() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = finalDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.querySelector("#days h2").innerHTML = days;
    document.querySelector("#hours h2").innerHTML = hours;
    document.querySelector("#minutes h2").innerHTML = minutes;
    document.querySelector("#seconds h2").innerHTML = seconds;

    if(days <= 0){
        document.querySelector("#days h2").innerHTML = 0;
    }
    if(hours <= 0){
        document.querySelector("#hours h2").innerHTML = 0;
    }
    if(minutes <= 0){
        document.querySelector("#minutes h2").innerHTML = 0;
    }
    if(seconds <= 0){
        document.querySelector("#seconds h2").innerHTML = 0;
    }
}

setInterval(() => timer(), 0);