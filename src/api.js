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

  static postRequest(word) {
    //console.log(word)
    //{ word: { value: "sample" } }
    let data = { word: { value: `${word}` } }

    $.ajax({
      method: "POST",
      url:    "http://localhost:3000/api/v1/words",
      data: data
    })
    .then(function(data) {
      console.log(`${word} posted!`)
    })
    .catch(function(data) {
      console.log('posting error!')
    })
  }
}

module.exports = Api

