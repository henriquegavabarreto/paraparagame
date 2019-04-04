var player = require('../../../config/youtube.js')
var editor = require('../../../config/editor.js')
var showMoveInfo = require('../../../moves/show-move-info.js')

function play (event) {
  if (editor.status && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.play ) {
      if ( player.getState() === 'playing' ) {
        player.pause()
        setTimeout(showMoveInfo, 150)
      } else {
        player.play()
      }
    }
  }
}

module.exports = window.addEventListener('keydown', play)
