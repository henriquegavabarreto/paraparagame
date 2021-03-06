import { drawNote } from './draw-note.js'
import { elements } from '../../config/containers.js'
var songManager = require('../../config/song-manager.js')
var editor = require('../../config/editor.js')
import { enableCircleClick } from '../circleSelection/enable-circle-click.js'
var addMove = require('../../moves/add-move.js')

function createNote (pressedKey, beat = songManager.getNearestBeat()) {
  let x = 22 // default x to left hand
  if (pressedKey) {
    if ( pressedKey === editor.shortCuts.rightHand ) x = 108
  } else {
    if ( editor.keyStatus.xPressed === true ) x = 108
  }

  drawNote(x, beat)
}

export { createNote }
