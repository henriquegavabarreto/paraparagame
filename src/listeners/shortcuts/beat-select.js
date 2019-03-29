var player = require('../../config/youtube.js')
var editor = require('../../config/editor.js')
var songManager = require('../../config/song-manager.js')
var beatArray = require('../../config/beat-array.js')
import { createNote } from '../../stage/elements/create-note.js'

// seek takes some time to take effect for some reason. setTimeout is here to give the desired effect of note creation

function beatSelect (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.nextQuarterBeat ) {
      let skippedBeats = 1
      player.seek(songManager.getNearestBeatTime(skippedBeats))
      createNoteWhenSelected(skippedBeats)
    } else if ( event.key === editor.shortCuts.previousQuarterBeat ) {
      let skippedBeats = -1
      player.seek(songManager.getNearestBeatTime(skippedBeats))
      createNoteWhenSelected(skippedBeats)
    } else if ( event.key === editor.shortCuts.nextBeat ) {
      let skippedBeats = 4
      player.seek(songManager.getNearestBeatTime(skippedBeats))
      createNoteWhenSelected(skippedBeats)
    } else if ( event.key === editor.shortCuts.previousBeat ) {
      let skippedBeats = -4
      player.seek(songManager.getNearestBeatTime(skippedBeats))
      createNoteWhenSelected(skippedBeats)
    }
  }
}

var beatSelectors = window.addEventListener('keydown', beatSelect)

export { beatSelectors }

function createNoteWhenSelected (beats) {
  if ( editor.keyStatus.zPressed || editor.keyStatus.xPressed ) {
    let pressedKey = setPressedKey()
    if (beats === 1 || beats === -1){
      setTimeout(function () {
        createNote()
        beatArray.add()
        console.log(editor.beatArray)
      }, 80)
    } else if (beats === 4) {
      for(let i = 0; i <= 3; i++) { // adds notes in between
        setTimeout(function () {
          let beatToAdd = songManager.getNearestBeat() - i
          createNote(pressedKey, beatToAdd)
          beatArray.add(beatToAdd)
          console.log(editor.beatArray)
        }, 80)
      }
    } else if (beats === -4) {
      for(let i = 0; i <= 3; i++) {
        setTimeout(function () { // adds notes in between
          let beatToAdd = songManager.getNearestBeat() + i
          createNote(pressedKey, beatToAdd)
          beatArray.add(beatToAdd)
          console.log(editor.beatArray)
        }, 80)
      }
    }
  }
}

function setPressedKey () {
  let pressedKey = editor.shortCuts.leftHand //default to z pressed
  if ( editor.keyStatus.xPressed ) pressedKey = editor.shortCuts.rightHand
  return pressedKey
}
