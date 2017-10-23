const $ = require('jQuery')
const Breakdown = require('./breakdown')

class Listeners {
  constructor() {
  }

  static breakdownButtonListener() {
    $('button').on('click', function() {
      Breakdown.breakdown()


    //alert('button pressed!')
    })
  }
}

module.exports = Listeners
