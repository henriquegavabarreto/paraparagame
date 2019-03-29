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
    drawNote(x, beat)
    //enableCircleClick()
    //addMove(pressedKey)
}

export { createNote }
