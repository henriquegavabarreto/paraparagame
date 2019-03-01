var player = require('../config/youtube.js')
var editor = require('../config/editor.js')

function play (event) {
  if (editor.status && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.play ) {
      if ( player.getState() === 'playing' ) {
        player.pause()
      } else {
        player.play()
      }
    }
  }
}

module.exports = window.addEventListener('keydown', play)
