var player = require('../../../config/youtube.js')
var editor = require('../../../config/editor.js')
var showMoveInfo = require('../../../moves/show-move-info.js')
import drawCues from '../../../stage/cueContainer/draw-cues.js'

function play (event) {
  if (editor.status && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.play ) {
      if ( player.getState() === 'playing' ) {
        player.pause()
        setTimeout(function () {
          showMoveInfo()
          drawCues()
        }, 150)
      } else {
        player.play()
      }
    }
  }
}

export default document.getElementById('canvas').addEventListener('keydown', play)
