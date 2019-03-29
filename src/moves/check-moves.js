var danceChart = require('../../data/dance-chart.js')
var songManager = require('../config/song-manager.js')

function checkMoves (beat) { // return move index on the danceChart or -1
  if ( danceChart.moves.length === 0 ) {
    return -1
  } else {
    for(let i = 0; i < danceChart.moves.length; i++){
      let move = danceChart.moves[i]
      move = move.split(',')
      if ( move[0] == beat ) {
        return i
        break
      } else if ( i == danceChart.moves.length - 1) {
        return -1
      }
    }
  }
}

module.exports = checkMoves
