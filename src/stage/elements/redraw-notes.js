import { elements } from '../../config/containers.js'
import { drawNote } from './draw-note.js'
var danceChart = require('../../../data/dance-chart.js')
import { tintNotes } from '../../notes/tint-notes.js'

// NOTE: redrawNotes should be fixed after the movements are added to the danceChart moves array

function redrawNotes (offsetDifference, bpm) {
  elements.removeChildren() // remove all notes
  let moves = danceChart.moves
  let updatedMoves = []
  moves.forEach( move => { // insert all elements again based on the bpm and offset changes based on the dance chart
    move = move.split(',')
    move[0] = parseFloat(move[0]) + Math.round((offsetDifference/(60/bpm)) * 4) // change moves beat so they stay in the same time according to the song
    if (move[2] !== 'X') {
      drawNote(22, move[0])
      console.log(move[0])
      tintNotes(move[0], 'L', move[2][0])
    }
    if (move[3] !== 'X') {
      drawNote(108, move[0])
      tintNotes(move[0], 'R', move[3][0])
    }
    updatedMoves.push(move.join(','))
  })
  danceChart.moves = updatedMoves // update moves on the dance chart
}

export { redrawNotes }
