var songManager = require('../config/song-manager.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')
import { drawSelectionRectangle } from '../stage/copyPasteSelection/draw-selection-rectangle.js'

function getFirstBeat (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.copy && event.repeat === false ) {
      editor.selectingMoves = true
      editor.copySelection = []
      editor.clipboard = []
      editor.copySelection.push(songManager.getNearestBeat())
      drawSelectionRectangle()
    }
  }
}

var copyKeyDown = document.getElementById('canvas').addEventListener('keydown', getFirstBeat)

export { copyKeyDown }
