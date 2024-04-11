let day = document.querySelector(".countdown .day .count .num"),
    hour = document.querySelector(".countdown .hour .count .num"),
    minute = document.querySelector(".countdown .minute .count .num"),
    second = document.querySelector(".countdown .second .count .num"),
    social = document.querySelectorAll(".social svg"),

    days = Number(day.innerHTML) - 1,
    hours = Number(hour.innerHTML) - 1,
    minutes = Number(minute.innerHTML) - 1,
    seconds = Number(second.innerHTML) - 1,

    stop = 0

social.forEach(s => s.addEventListener("mouseover", function () { s.firstElementChild.attributes[0].value = "#fb6087" }))
social.forEach(s => s.addEventListener("mouseleave", function () { s.firstElementChild.attributes[0].value = "#8385A9" }))

function stopNow() { clearInterval(sec) }

let sec = setInterval(function () {
    if (seconds === 0) { second.innerHTML = "00"; if (stop === 3) { stopNow() } else { moveMin(); seconds = 60 }; }
    else if (seconds < 10) { second.innerHTML = "0" + seconds }
    else { second.innerHTML = seconds }
    seconds -= 1
}, 1000)

function moveMin() {
    if (minutes === 0) { minute.innerHTML = "00"; if (stop === 2) { stop = 3 } else { minutes = 60; moveHour(); } }
    else if (minutes < 10) { minute.innerHTML = "0" + minutes }
    else { minute.innerHTML = minutes }
    minutes -= 1
}

function moveHour() {
    if (hours === 0) { hour.innerHTML = "00"; if (stop === 1) { stop = 2 } else { hours = 24; moveDay() } }
    else if (hours < 10) { hour.innerHTML = "0" + hours }
    else { hour.innerHTML = hours }
    hours -= 1
}

function moveDay() {
    if (days === 0) { day.innerHTML = "00"; stop = 1 }
    else if (days < 10) { day.innerHTML = "0" + days }
    else { day.innerHTML = days }
    days -= 1
}
