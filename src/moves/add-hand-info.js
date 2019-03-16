var checkMoves = require('./check-moves.js')
var danceChart = require('../../data/dance-chart.js')

function addHandInfo (position) {
  let moveIndex = checkMoves()
  let move = danceChart.moves[moveIndex].split(',')
  if ( move[2] !== 'X' && move[2].length === 1 ) {
    move[2] = move[2] + position
    danceChart.moves[moveIndex] = move.join(',')
    console.log(danceChart.moves[moveIndex])
  } else if ( move[3] !== 'X' && move[3].length === 1 ) {
    move[3] = move[3] + position
    danceChart.moves[moveIndex] = move.join(',')
    console.log(danceChart.moves[moveIndex])
  }
  // check which hand on the current move is S
  // change it to be type (1, 2 or 3) start position
  // if it is sharp (1) it doesnt need ending position, duration or progress (0, 1 or 2 - start, in progress and end)
  // if there is a hold or move, search for the the end of this move or hold and do the calculation
  // so hold and move would have progress at the end of the string and sharp would not
  // if the type is a number and not X, it should be detected
  // see if that part of the move is X, if it is, don't detect it
  // 19 (sharp position 9) or S9
  // 291 (hold, position 9, starts at this beat) H9S / H9P / H9E

}

module.exports = addHandInfo
