var checkNoteType = require('./check-note-type.js')
var beatArray = require('../config/beat-array.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')

function stopNoteCreation (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.rightHand ) {
      if ( editor.keyStatus.xPressed === true ) {
        editor.keyStatus.xPressed = false
        beatArray.sort()
        checkNoteType()
        console.log(editor.beatArray)
        beatArray.clear()
      }
    } else if ( event.key === editor.shortCuts.leftHand) {
      if ( editor.keyStatus.zPressed === true ) {
        editor.keyStatus.zPressed = false
        beatArray.sort()
        checkNoteType()
        console.log(editor.beatArray)
        beatArray.clear()
      }
    }
  }
}

var noteKeyUp = window.addEventListener('keyup', stopNoteCreation)

export { noteKeyUp }
