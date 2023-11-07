// Display 2 digits
function twoDigits(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

// If the website has been visited
if(localStorage.getItem('timeLeft') === null){
    localStorage.setItem('timeLeft', '14*24*60*60*1000')
}

// Initiate Countown
let date = new Date();
let getLocal = localStorage.getItem('timeLeft')
date.setTime(date.getTime()+(eval(getLocal)));

let initnow = new Date().getTime()
let initdistance = date - initnow

let initdays = Math.floor(initdistance / (1000 * 60 * 60 * 24))
let inithours = Math.floor((initdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let initminutes = Math.floor((initdistance % (1000 * 60 * 60)) / (1000 * 60))
let initseconds = Math.floor((initdistance % (1000 * 60)) / 1000)

document.querySelector("#days h2").innerHTML = twoDigits(initdays, 2)
document.querySelector("#hours h2").innerHTML = twoDigits(inithours, 2)
document.querySelector("#minutes h2").innerHTML = twoDigits(initminutes, 2)
document.querySelector("#seconds h2").innerHTML = twoDigits(initseconds, 2)


// update Counter
function timer() {

    // Check current date
    let now = new Date().getTime()
    let distance = date - now

    // Calculate time
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)


    //displays time
    document.querySelector("#days h2").innerHTML = twoDigits(days, 2)
    document.querySelector("#hours h2").innerHTML = twoDigits(hours, 2)
    document.querySelector("#minutes h2").innerHTML = twoDigits(minutes, 2)
    document.querySelector("#seconds h2").innerHTML = twoDigits(seconds, 2)

    // Activate animations
    document.querySelector("#seconds h2").classList.add("time")
    document.querySelector("#seconds .shading").classList.add("flipcard")

    let daylast = Math.floor(localStorage.getItem('timeLeft') / (1000 * 60 * 60 * 24));
    if(daylast != days){
        document.querySelector("#minutes h2").classList.add("time")
        document.querySelector("#minutes .shading").classList.add("flipcard")
        
        setTimeout(() => {
            document.querySelector("#minutes h2").classList.remove("time")
            document.querySelector("#minutes .shading").classList.remove("flipcard")
        }, 900)
    }

    let hourlast = Math.floor((localStorage.getItem('timeLeft') % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(hourlast != hours){
        document.querySelector("#minutes h2").classList.add("time")
        document.querySelector("#minutes .shading").classList.add("flipcard")
        
        setTimeout(() => {
            document.querySelector("#minutes h2").classList.remove("time")
            document.querySelector("#minutes .shading").classList.remove("flipcard")
        }, 900)
    }

    let minutelast = Math.floor((localStorage.getItem('timeLeft') % (1000 * 60 * 60)) / (1000 * 60));
    if(minutelast != minutes){
        document.querySelector("#minutes h2").classList.add("time")
        document.querySelector("#minutes .shading").classList.add("flipcard")
        
        setTimeout(() => {
            document.querySelector("#minutes h2").classList.remove("time")
            document.querySelector("#minutes .shading").classList.remove("flipcard")
        }, 900)
    }

    // Updates localStorage
    updateLocal(days, hours, minutes, seconds)


    // Check if 
    if(days <= 0){
        document.querySelector("#days h2").innerHTML = twoDigits(0, 2)
    }
    if(hours <= 0){
        document.querySelector("#hours h2").innerHTML = twoDigits(0, 2)
    }
    if(minutes <= 0){
        document.querySelector("#minutes h2").innerHTML = twoDigits(0, 2)
    }
    if(seconds <= 0){
        document.querySelector("#seconds h2").innerHTML = twoDigits(0, 2)
    }

    // Remove animation triggers 
    setTimeout(() => {
        document.querySelector("#seconds h2").classList.remove("time")
        document.querySelector("#seconds .shading").classList.remove("flipcard")
    }, 900)
}

setInterval(() => timer(), 1000)


// Update LocalHost
function updateLocal(d, h, m, s) {
    s = s * 1000
    m = m * 1000 * 60
    h = h * 1000 * 60 * 60
    d = d * 1000 * 60 * 60 * 24
    localStorage.setItem('timeLeft', d + h + m + s)
}