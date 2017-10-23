const Words = require('./words')
const Listener = require('./listeners')

document.addEventListener("DOMContentLoaded", () => {
  Words.getWords()
  Listener.breakdownButtonListener()
  Listener.breakdownEnterListener()
})

