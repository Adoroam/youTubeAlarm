const a = {}
a.clicked = false
a.hour = 6
a.minutes = 30
let success = () => {
  document.getElementsByClassName('ytp-play-button')[0].click()
  a.clicked = true
  clearInterval(timer)
}
let theLoop = () => {
  if (!a.clicked) {
    let current = new Date()
    if (current.getHours() === a.hour && current.getMinutes() === a.minutes) success()
  }
}
let timer = setInterval(theLoop, 1000)
