const $ = require('jQuery')

class Html {
  constructor() {
  }

  static appendTopWord(word, num) {
    $('h3').text(`Top word from Word Watch API: ${word} (${num})`)
  }

  static appendWords(word, num) {
    let wordToAppend = `<font size=${num}em>${word}</font>`
    $('.word-count').append(wordToAppend)
    $('.word-count').append(" ")
  }
}

module.exports = Html
