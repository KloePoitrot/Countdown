// Initiate final date
let finalDate = new Date("nov 14, 2024 14:45:80").getTime()

let initnow = new Date().getTime()
let initdistance = finalDate - initnow

let initdays = Math.floor(initdistance / (1000 * 60 * 60 * 24))
let inithours = Math.floor((initdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let initminutes = Math.floor((initdistance % (1000 * 60 * 60)) / (1000 * 60))
let initseconds = Math.floor((initdistance % (1000 * 60)) / 1000)

function twoDigits(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

document.querySelector("#days h2").innerHTML = twoDigits(initdays, 2)
document.querySelector("#hours h2").innerHTML = twoDigits(inithours, 2)
document.querySelector("#minutes h2").innerHTML = twoDigits(initminutes, 2)
document.querySelector("#seconds h2").innerHTML = twoDigits(initseconds, 2)




function timer() {
    let now = new Date().getTime()
    let distance = finalDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.querySelector("#days h2").innerHTML = twoDigits(days, 2)
    document.querySelector("#hours h2").innerHTML = twoDigits(hours, 2)
    document.querySelector("#minutes h2").innerHTML = twoDigits(minutes, 2)
    document.querySelector("#seconds h2").innerHTML = twoDigits(seconds, 2)

    document.querySelector("#seconds h2").classList.add("time")
    document.querySelector("#seconds .shading").classList.add("flipcard")

    document.querySelector("#hours h2").addEventListener('change', () =>{
        console.log('wee')
        document.querySelector("#minutes h2").classList.add("time")
        document.querySelector("#minutes .shading").classList.add("flipcard")
        
        setTimeout(() => {
            document.querySelector("#minutes h2").classList.remove("time")
            document.querySelector("#minutes .shading").classList.remove("flipcard")
        }, 900)
    })

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

    setTimeout(() => {
        document.querySelector("#seconds h2").classList.remove("time")
        document.querySelector("#seconds .shading").classList.remove("flipcard")
    }, 900)
}

setInterval(() => timer(), 1000)