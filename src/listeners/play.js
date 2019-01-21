var player = require('../config/youtube.js')
var editor = require('../config/editor.js')

function playPause () {
  if ( editor.status ){
    if ( player.getState() === 'playing' ) {
      player.pause()
    } else {
      player.play()
    }
  }
}

module.exports = document.getElementById('play-pause').addEventListener('click', playPause)
