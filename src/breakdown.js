const HTML = require('./html')
const API  = require('./api')

class Breakdown {
  constructor() {
  }
  static breakdown(text) {
    let hash = {}
    text = text.toLowerCase().split(" ")
      text.forEach(function(word) {
        hash[word] ? hash[word] += 1 : hash[word] = 1
      })
    debugger
    this.sendWordsToHTML(hash)
  }

  static sendWordsToHTML(hash) {
    let keys = Object.keys(hash)
    keys.forEach(function(word) {
      let num = hash[word]
      HTML.appendWords(word, num)
      API.postRequest(word)
    })
  }
}

module.exports = Breakdown
