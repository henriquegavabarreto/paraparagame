import { elements } from '../../config/containers.js'
import { drawNote } from './draw-note.js'
var danceChart = require('../../../data/dance-chart.js')

function redrawNotes (offsetDifference, bpm) {
  elements.removeChildren() // remove all notes
  let moves = danceChart.moves
  let updatedMoves = []
  moves.forEach( move => { // insert all elements again based on the bpm and offset changes based on the dance chart
    let x
    move = move.split(',')
    move[0] = parseFloat(move[0]) + Math.round((offsetDifference/(60/bpm)) * 4) // change moves beat so they stay in the same time according to the song
    if (move[2] !== 'X') drawNote(22, move[0])
    if (move[3] !== 'X') drawNote(108, move[0])
    updatedMoves.push(move.join(','))
  })
  danceChart.moves = updatedMoves // update moves on the dance chart
}

export { redrawNotes }
