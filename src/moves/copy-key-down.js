var songManager = require('../config/song-manager.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')

function getFirstBeat (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.copy && event.repeat === false ) {
      editor.copySelection = []
      editor.clipboard = []
      editor.copySelection.push(songManager.getNearestBeat())
    }
  }
}

var copyKeyDown = document.getElementById('canvas').addEventListener('keydown', getFirstBeat)

module.exports = copyKeyDown
