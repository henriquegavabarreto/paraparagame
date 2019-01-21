var player = require('../config/youtube.js')

function playIfSpacePressed (event) {
  if ( event.code === 'Space' ) {
    if ( player.getState() === 'playing' ) {
      player.pause()
    } else {
      player.play()
    }
  }
}

module.exports = window.addEventListener('keydown', playIfSpacePressed)
