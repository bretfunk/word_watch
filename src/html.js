const $ = require('jQuery')

class Html {
  constructor() {
  }

  static appendTopWord(word, num) {
    $('h3').text(`Top word from Word Watch API: ${word} (${num})`)
  }
}

module.exports = Html
