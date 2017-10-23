const HTML = require('./html')

class Breakdown {
  constructor() {
  }
  static breakdown(text) {
    let hash = {}
    text = text.toLowerCase().split(" ")
      text.forEach(function(word) {
        //console.log(word)
        hash[word] ? hash[word] += 1 : hash[word] = 1
      })
    //console.log(hash)
    this.sendWordsToHTML(hash)
  }

  static sendWordsToHTML(hash) {
    let keys = Object.keys(hash)
    keys.forEach(function(word) {
      let num = hash[word]
      //console.log(word)
      //console.log(num)
      HTML.appendWords(word, num)
    })
  }
}

module.exports = Breakdown
