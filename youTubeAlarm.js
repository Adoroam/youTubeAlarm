let inputs = document.createElement('div')
inputs.innerHTML = '<input type="number" placeholder="hour" id="hour" max="24" style="display: inline; width: 50px; margin-left: 1em;"><input type="number" placeholder="mintues" id="minutes" max="59" style="display: inline; width: 80px;">'
document.getElementById('search').appendChild(inputs)

let setHour = () => { return Number(document.getElementById('hour').value) }
let setMinutes = () => { return Number(document.getElementById('minutes').value) }
let startAlarm = () => {
  document.getElementsByClassName('ytp-play-button')[0].click()
  clearInterval(timer)
}
let c = () => { return new Date() }
let checkHour = () => { return c().getHours() === setHour() }
let checkMinutes = () => { return c().getMinutes() === setMinutes() }
let theLoop = () => { if (checkHour() && checkMinutes()) startAlarm() }
let timer = setInterval(theLoop, 1000)
