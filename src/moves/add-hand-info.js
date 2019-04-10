var checkMoves = require('./check-moves.js')
var danceChart = require('../../data/dance-chart.js')
var getMoveType = require('./get-move-type.js')
var editor = require('../config/editor.js')

function addHandInfo () {
  let moveType = getMoveType()
  editor.beatArray.forEach((beat, index) => {
    let moveIndex = checkMoves(beat)
    let move = danceChart.moves[moveIndex].split(',')
    if (moveType === 'S') {
      if ( move[2] !== 'X' && move[2].length === 1 ) {
        move[2] = moveType + editor.selectedCircles[0]
        danceChart.moves[moveIndex] = move.join(',')
      } else if ( move[3] !== 'X' && move[3].length === 1 ) {
        move[3] = moveType + editor.selectedCircles[0]
        danceChart.moves[moveIndex] = move.join(',')
      }
    } else {
      if(index === 0) {
        if ( move[2] !== 'X' && move[2].length === 1 ) {
          move[2] = moveType + editor.selectedCircles[0] + 'S'
          danceChart.moves[moveIndex] = move.join(',')
        } else if ( move[3] !== 'X' && move[3].length === 1 ) {
          move[3] = moveType + editor.selectedCircles[0] + 'S'
          danceChart.moves[moveIndex] = move.join(',')
        }
      } else if (index > 0 && index < editor.beatArray.length - 1){
        if ( move[2] !== 'X' && move[2].length === 1 ) {
          move[2] = moveType + 'P'
          danceChart.moves[moveIndex] = move.join(',')
        } else if ( move[3] !== 'X' && move[3].length === 1 ) {
          move[3] = moveType + 'P'
          danceChart.moves[moveIndex] = move.join(',')
        }
      } else if (index === editor.beatArray.length - 1){
        if ( move[2] !== 'X' && move[2].length === 1 ) {
          move[2] = moveType + editor.selectedCircles[1] + 'E'
          danceChart.moves[moveIndex] = move.join(',')
        } else if ( move[3] !== 'X' && move[3].length === 1 ) {
          move[3] = moveType + editor.selectedCircles[1] + 'E'
          danceChart.moves[moveIndex] = move.join(',')
        }
      }
    }
  })



  // check which hand on the current move is S
  // change it to be type S (sharp), H (hold) or M (motion)
  // calculation of duration will be done on the fly
  // if the move is X, it shouldn't be detected
  // S9 (sharp position 9)
  // H9S (hold, position 9, starts at this beat) / HP (hold in progress) / H9E (hold end at position 9)

}

module.exports = addHandInfo
