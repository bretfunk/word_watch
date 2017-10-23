const $ = require('jQuery')
const HTML = require('./html')
const url = require('./url')

class Api {
  constructor() {
  }
  static getTopWord() {
    $.ajax({
      method: "GET",
      url: url() + 'top_word' //'http://localhost:3000/api/v1/top_word'
    })
    .then(function(data) {
      let word = Object.keys(data.word)[0]
      let num  = data.word[word]
      HTML.appendTopWord(word, num)
    })
    .catch(function(data) {
      alert('get issue!')
    })
  }

  static postRequest(word) {
    let data = { word: { value: `${word}` } }

    $.ajax({
      method: "POST",
      url:    url() + 'words', //"http://localhost:3000/api/v1/words",
      data: data
    })
    .then(function(data) {
      console.log(`${word} posted!`)
    })
    .catch(function(data) {
      console.log(`${word} posting error!`)
    })
  }
}

module.exports = Api

