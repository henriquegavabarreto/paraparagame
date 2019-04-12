var songManager = require('../config/song-manager.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')

function getLastBeat (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.copy ) {
      editor.copySelection.push(songManager.getNearestBeat())
    }
  }
}

var copyKeyUp = document.getElementById('canvas').addEventListener('keyup', getLastBeat)

module.exports = copyKeyUp
