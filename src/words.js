const API = require('./api')

class Words {
  constructor() {
  }
  static getWords() {
    API.getTopWord()
  //alert('it works!')

  }
}

module.exports = Words
