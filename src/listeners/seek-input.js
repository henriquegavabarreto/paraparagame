var player = require('../config/youtube.js')
var songManager = require('../config/song-manager.js')
var editor = require('../config/editor.js')

seekInput = document.getElementById('beat-to-seek')

function seekToBeat (event) {
  if ( event.key === 'Enter' && editor.status && !editor.areaSelect ) {
    if ( isNaN(seekInput.value) ) {
      alert('The input must be a number')
    } else if ( seekInput.value % 1 !== 0 ) {
      alert('The input must be a valid number')
    } else {
      player.seek(songManager.getNearestBeatTime( ((seekInput.value - 1) * 4 ) - songManager.getCurrentQuarterBeat() ))
    }
  } else if ( !editor.status ) {
    alert('The player is not ready yet.\nPlease select a video.')
  }
}

module.exports = seekInput.addEventListener('keydown', seekToBeat)
