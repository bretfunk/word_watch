const API = require('./api')

class Words {
  constructor() {
  }
  static getWords() {
    API.getTopWord()
  }
}

module.exports = Words
