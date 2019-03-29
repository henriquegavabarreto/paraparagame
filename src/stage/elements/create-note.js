import { drawNote } from './draw-note.js'
import { elements } from '../../config/containers.js'
var songManager = require('../../config/song-manager.js')
var editor = require('../../config/editor.js')
import { enableCircleClick } from '../circleSelection/enable-circle-click.js'
var addMove = require('../../moves/add-move.js')

// NOTE: Check if adding checkChartPosition to the drawNote function wouldn't be better

function createNote (pressedKey, beat) {
  let x = 22 // default x to left hand
  if (pressedKey) {
    if ( pressedKey === editor.shortCuts.rightHand ) x = 108
  } else {
    if ( editor.keyStatus.xPressed === true ) x = 108
  }

  if (!beat) beat = songManager.getNearestBeat()
  // create a note only if the space is empty
  if (!checkChartPosition(x)) {
    drawNote(x, songManager.getNearestBeat())
    //enableCircleClick()
    //addMove(pressedKey)
  }
}

// Checks if there's a note at the current position
function checkChartPosition (x) {
  for (let notes of elements.children) {
    if (notes.x === x && notes.y === (56 * songManager.getNearestBeat()/4) + 58) {
      return true
      break
    }
  }
}

export { createNote }
