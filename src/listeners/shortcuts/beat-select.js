var player = require('../../config/youtube.js')
var editor = require('../../config/editor.js')
var songManager = require('../../config/song-manager.js')
var beatArray = require('../../config/beat-array.js')
import { createNote } from '../../stage/elements/create-note.js'

// seek takes some time to take effect for some reason. setTimeout is here to give the desired effect of note creation

function beatSelect (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.nextQuarterBeat ) {
      player.seek(songManager.getNearestBeatTime(1))
      createNoteWhenSelected()
    } else if ( event.key === editor.shortCuts.previousQuarterBeat ) {
      player.seek(songManager.getNearestBeatTime(-1))
      createNoteWhenSelected()
    } else if ( event.key === editor.shortCuts.nextBeat ) {
      player.seek(songManager.getNearestBeatTime(4))
      createNoteWhenSelected()
    } else if ( event.key === editor.shortCuts.previousBeat ) {
      player.seek(songManager.getNearestBeatTime(-4))
      createNoteWhenSelected()
    }
  }
}

var beatSelectors = window.addEventListener('keydown', beatSelect)

export { beatSelectors }

function createNoteWhenSelected () {
  if ( editor.keyStatus.zPressed || editor.keyStatus.xPressed ) {
    setTimeout(function () {
      createNote()
      beatArray.add()
      console.log(editor.beatArray)
    }, 60)
  }
}
