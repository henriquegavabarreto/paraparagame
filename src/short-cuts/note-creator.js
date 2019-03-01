import { createNote } from '../stage/elements/create-note.js'
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')

function createNewNote (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.rightHand || event.key === editor.shortCuts.leftHand) {
      createNote(event.key)
    }
  }
}

var noteCreator = window.addEventListener('keydown', createNewNote)

export { noteCreator }
