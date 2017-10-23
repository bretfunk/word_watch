const $ = require('jQuery')
const Breakdown = require('./breakdown')

class Listeners {
  constructor() {
  }

  static breakdownButtonListener() {
    $('button').on('click', function(event) {
      event.preventDefault()
      let text = $('textarea').val()
      Breakdown.breakdown(text)
    })
  }
}

module.exports = Listeners
