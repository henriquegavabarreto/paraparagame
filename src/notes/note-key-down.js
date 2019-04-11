import { createNote } from '../stage/elements/create-note.js'
var beatArray = require('../config/beat-array.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')

function startNoteCreation (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.rightHand) {
      editor.creatingMove = true
      if ( editor.keyStatus.xPressed === false && editor.keyStatus.zPressed === false ) {
        editor.selectedHand = 'R'
        editor.keyStatus.xPressed = true
        beatArray.add()
        createNote(event.key)
      }
    } else if ( event.key === editor.shortCuts.leftHand) {
      editor.creatingMove = true
      if ( editor.keyStatus.zPressed === false && editor.keyStatus.xPressed === false ) {
        editor.selectedHand = 'L'
        editor.keyStatus.zPressed = true
        beatArray.add()
        createNote(event.key)
      }
    }
  }
}

var noteKeyDown = document.getElementById('canvas').addEventListener('keydown', startNoteCreation)

export { noteKeyDown }
