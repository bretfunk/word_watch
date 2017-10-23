const $ = require('jQuery')
const HTML = require('./html')

class Api {
  constructor() {
  }
  static getTopWord() {
    $.ajax({
      method: "GET",
      url: 'http://localhost:3000/api/v1/top_word'
    })
    .then(function(data) {
    let word = Object.keys(data.word)[0]
    let num  = data.word[word]
    //debugger
    HTML.appendTopWord(word, num)
    })
    .catch(function(data) {
      alert('get issue!')
    })
  }
}

module.exports = Api

