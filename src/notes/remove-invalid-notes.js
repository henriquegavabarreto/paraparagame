var editor = require('../config/editor.js')
import { elements } from '../config/containers.js'
var checkMoves = require('../moves/check-moves.js')
var danceChart = require('../../data/dance-chart.js')

function removeInvalidNotes () {
  let invalidNotes = []
  editor.beatArray.forEach( (beat) => {
    let moveIndex = checkMoves(beat)
    if ( moveIndex !== -1 ) { // if there are moves
      let move = danceChart.moves[moveIndex]
      move = move.split(',')
      if ( editor.selectedHand === 'L' && move[2] === 'X' ) {
        invalidNotes.push(beat)
      } else if ( editor.selectedHand === 'R' && move[3] === 'X' ) {
        invalidNotes.push(beat)
      }
    } else { // if no moves
      invalidNotes.push(beat)
    }
  })
  if ( invalidNotes.length > 0 ) {
    invalidNotes.forEach((beat) => {
      let noteToRemove = elements.getChildByName(`${beat}${editor.selectedHand}`)
      elements.removeChild(noteToRemove)
    })
  }
}

export { removeInvalidNotes }
