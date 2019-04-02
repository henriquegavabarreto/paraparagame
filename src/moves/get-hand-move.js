var danceChart = require('../../data/dance-chart.js')
var checkMoves = require('./check-moves.js')

function getHandMove (beat, hand) {
  let i = checkMoves(beat)
  if (i >= 0) {
    let move = danceChart.moves[i]
    move = move.split(',')
    if (hand === 'L') {
      return move[2]
    } else {
      return move[3]
    }
  } else {
    return 'X'
  }
}

module.exports = getHandMove
