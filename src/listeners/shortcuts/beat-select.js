var player = require('../../config/youtube.js')
var editor = require('../../config/editor.js')
var songManager = require('../../config/song-manager.js')
var beatArray = require('../../config/beat-array.js')
import { createNote } from '../../stage/elements/create-note.js'

function beatSelect (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.nextQuarterBeat ) {
      player.seek(songManager.getNearestBeatTime(1))
      if ( editor.keyStatus.zPressed || editor.keyStatus.xPressed ) {
        beatArray.add()
        createNote()
      }
    } else if ( event.key === editor.shortCuts.previousQuarterBeat ) {
      player.seek(songManager.getNearestBeatTime(-1))
      if ( editor.keyStatus.zPressed || editor.keyStatus.xPressed ) {
        beatArray.add()
        createNote()
      }
    } else if ( event.key === editor.shortCuts.nextBeat ) {
      player.seek(songManager.getNearestBeatTime(4))
      if ( editor.keyStatus.zPressed || editor.keyStatus.xPressed ) {
        beatArray.add()
        createNote()
      }
    } else if ( event.key === editor.shortCuts.previousBeat ) {
      player.seek(songManager.getNearestBeatTime(-4))
      if ( editor.keyStatus.zPressed || editor.keyStatus.xPressed ) {
        beatArray.add()
        createNote()
      }
    }
  }
}

var beatSelectors = window.addEventListener('keydown', beatSelect)

export { beatSelectors }
