var checkMoves = require('../moves/check-moves.js')
import { elements } from '../config/containers.js'
var danceChart = require('../../data/dance-chart.js')
var editor = require('../config/editor.js')

function isValidInsert () {
  let isValid = false
  for ( let i = 0; i < editor.beatArray.length; i++) {
    let moveIndex = checkMoves(editor.beatArray[i])
    if ( moveIndex !== -1 ) { // if there are moves
      let move = danceChart.moves[moveIndex]
      move = move.split(',')
      if ( editor.selectedHand === 'L' && move[2] !== 'X' ) {
        return false
        break
      } else if ( editor.selectedHand === 'R' && move[3] !== 'X' ) {
        return false
        break
      } else {
        isValid = true
      }
    } else { // if there's no moves in the selected beats
      isValid = true
    }
  }
  return isValid
}

export { isValidInsert }
