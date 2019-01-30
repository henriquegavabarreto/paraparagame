import { createNote } from '../stage/elements/create-note.js'
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')

function createNewNote (event) {
  if ( editor.status && player.getState() === 'paused') {
    if ( event.key === editor.shortCuts.rightHand ) {
      createNote()
    }
  }
}

var noteCreator = window.addEventListener('keydown', createNewNote)

export { noteCreator }
