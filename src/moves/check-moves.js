var danceChart = require('../../data/dance-chart.js')
var songManager = require('../config/song-manager.js')

function checkMoves () {
  if ( danceChart.moves.length === 0 ) {
    return -1
  } else {
    for(let i = 0; i < danceChart.moves.length; i++){
      let move = danceChart.moves[i]
      move = move.split(',')
      if ( move[0] == songManager.getNearestBeat() ) {
        return i
        break
      } else if ( i == danceChart.moves.length - 1) {
        return -1
      }
    }
  }
}

module.exports = checkMoves
