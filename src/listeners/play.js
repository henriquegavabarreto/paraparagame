var player = require('../config/youtube.js')

function playPause () {
  if ( player.getState() === 'playing' ) {
    player.pause()
  } else {
    player.play()
  }
}

module.exports = document.getElementById('play-pause').addEventListener('click', playPause)
