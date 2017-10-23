const $ = require('jQuery')

class Html {
  constructor() {
  }

  static appendTopWord(word, num) {
    $('h3').text(`Top word from Word Watch API: ${word} (${num})`)
  }

  static appendWords(word, num) {
    //console.log(word)
    //console.log(num)
    $('.word-count').append(word)
  }
}

module.exports = Html
