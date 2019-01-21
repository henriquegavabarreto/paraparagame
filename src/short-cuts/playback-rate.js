var player = require('../config/youtube.js')

function adjustRate (event) {
  if ( event.code === 'Comma' ) {
    let v = player.getPlaybackRate()
    if ( v > 0.25 ) {
      player.setPlaybackRate(v - 0.25)
    }
  } else if ( event.code === 'Period') {
    let v = player.getPlaybackRate()
    if ( v < 2 ) {
      player.setPlaybackRate(v + 0.25)
    }
  }
}

module.exports = window.addEventListener('keydown', adjustRate)
