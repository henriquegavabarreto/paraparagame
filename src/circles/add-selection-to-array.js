var beatArray = require('../config/beat-array.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')
var songManager = require('../config/song-manager.js')
var clearSelectedCircles = require('./clear-selected-circles.js')
import { disableCircleClick } from '../stage/circleSelection/disable-circle-click.js'
var addHandInfo = require('../moves/add-hand-info.js')
var showMoveInfo = require('../moves/show-move-info.js')
import drawCues from '../stage/cueContainer/draw-cues.js'
import { tintNotes } from '../notes/tint-notes.js'

function addSelectionToArray (circle) {
  editor.selectedCircles.push(circle)
  if ( editor.selectedCircles.length === 1 && beatArray.getCircleCount() > 1) { // if there is more than one beat to be selected, seek to the last when needed
    player.seek(songManager.getBeatTime(editor.beatArray[editor.beatArray.length - 1]))
  }
  if (editor.selectedCircles.length >= beatArray.getCircleCount()) { // if we got all the positions we needed, disable clicks
    addHandInfo()
    tintNotes()
    disableCircleClick()
    clearSelectedCircles()
    beatArray.clear()
    editor.creatingMove = false
    setTimeout(function () {
      showMoveInfo()
      drawCues()
    }, 200)
  }
}

export { addSelectionToArray }
