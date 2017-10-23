const $ = require('jQuery')
const HTML = require('./html')
const url = require('./url')

class Api {
  constructor() {
  }

  static getTopWord() {
    $.ajax({
      method: "GET",
      url: url() + 'top_word'
    })
    .then(function(data) {
      let word = Object.keys(data.word)[0]
      let num  = data.word[word]
      HTML.appendTopWord(word, num)
    })
    .catch(function(data) {
      console.log('get issue!')
    })
  }

  static postRequest(word) {
    let data = { word: { value: `${word}` } }

    $.ajax({
      method: "POST",
      url:    url() + 'words',
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

