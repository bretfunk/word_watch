const API = require('./api')
const Listener = require('./listeners')

class Words {
  constructor() {
  }

  static loadPage() {
    this.getWords()
    Listener.breakdownButtonListener()
    Listener.breakdownEnterListener()
  }

  static getWords() {
    API.getTopWord()
  }
}

module.exports = Words
