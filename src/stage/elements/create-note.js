import * as PIXI from 'pixi.js'
import { elements } from '../../config/containers.js'
var songManager = require('../../config/song-manager.js')
var editor = require('../../config/editor.js')
import { enableCircleClick } from '../circleSelection/circle-selection.js'
var addMove = require('../../moves/add-move.js')

function createNote (pressedKey) {
  let x = 0

  if ( pressedKey === editor.shortCuts.rightHand ) {
    x = 108
  } else {
    x = 22
  }

  // create a note only if the space is empty
  if (!checkChartPosition(x)) {
    let note = new PIXI.Sprite.fromImage('../assets/move.png')
    note.x = x
    note.y = (56 * songManager.getCurrentBeat()) + 58
    note.scale.x = 0.9
    note.tint = 0xFF00FF
    if (x === 22) {
      note.name = `${songManager.getNearestBeat()}L`
    } else {
      note.name = `${songManager.getNearestBeat()}R`
    }
    elements.addChild(note)
    enableCircleClick()
    addMove(pressedKey)
  }
}

// Checks if there's a note at the current position
function checkChartPosition (x) {
  for (let notes of elements.children) {
    if (notes.x === x && notes.y === (56 * songManager.getCurrentBeat()) + 58) {
      return true
      break
    }
  }
}

export { createNote }
