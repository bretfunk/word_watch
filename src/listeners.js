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

  static breakdownEnterListener() {
    $('.text-submission').keypress(function(event) {
      if (event.which === 13) {
        //alert('enter key pressed!')
        $('button').trigger('click')
      }
    })
  }
}

module.exports = Listeners
