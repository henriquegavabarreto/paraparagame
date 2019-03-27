import * as PIXI from 'pixi.js'
import { elements } from '../../config/containers.js'
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

function drawNote(x, beat) {
  let note = new PIXI.Sprite.fromImage('../../../assets/move.png')
  note.x = x
  note.y = (56 * beat/4) + 58
  note.scale.x = 0.9
  note.tint = 0xFF00FF
  if (x === 22) {
    note.name = `${beat}L`
  } else {
    note.name = `${beat}R`
  }
  elements.addChild(note)
}

export { redrawNotes }
