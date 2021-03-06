var beatArray = require('../config/beat-array.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')
var addMove = require('../moves/add-move.js')
var songManager = require('../config/song-manager.js')
import { enableCircleClick } from '../stage/circleSelection/enable-circle-click.js'
import { isValidInsert } from './is-valid-insert.js'
import { removeInvalidNotes } from './remove-invalid-notes.js'

// FIX: If there is a note already in the end of the path, don't add any notes or moves - when the key is released trigger an alert
// It may be needed to have two arrays, one for valid spots for creation and another with invalid spots

function stopNoteCreation (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.rightHand ) {
      if ( editor.keyStatus.xPressed === true ) {
        editor.keyStatus.xPressed = false
        beatArray.sort()
        if ( isValidInsert() ) {
          addRequiredMoves(event.key)
          player.seek(songManager.getBeatTime(editor.beatArray[0]))
          enableCircleClick()
        } else {
          removeInvalidNotes()
          beatArray.clear()
        }
      }
    } else if ( event.key === editor.shortCuts.leftHand) {
      if ( editor.keyStatus.zPressed === true ) {
        editor.keyStatus.zPressed = false
        beatArray.sort()
        if ( isValidInsert() ) {
          addRequiredMoves(event.key)
          player.seek(songManager.getBeatTime(editor.beatArray[0]))
          enableCircleClick()
        } else {
          removeInvalidNotes()
          beatArray.clear()
        }
      }
    }
  }
}

var noteKeyUp = document.getElementById('canvas').addEventListener('keyup', stopNoteCreation)

export { noteKeyUp }

function addRequiredMoves (key) {
  editor.beatArray.forEach(beat => {
    addMove(key, beat)
  })
}
