var player = require('../../../config/youtube.js')
var editor = require('../../../config/editor.js')

function adjustRate (event) {
  if ( editor.status && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.slower ) {
      let v = player.getPlaybackRate()
      if ( v > 0.25 ) {
        v = v - 0.25
        player.setPlaybackRate(v)
      }
    } else if ( event.key === editor.shortCuts.faster ) {
      let v = player.getPlaybackRate()
      if ( v < 2 ) {
        v = v + 0.25
        player.setPlaybackRate(v)
      }
    }
  }
}

module.exports = document.getElementById('canvas').addEventListener('keydown', adjustRate)
