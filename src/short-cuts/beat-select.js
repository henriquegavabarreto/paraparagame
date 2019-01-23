var player = require('../config/youtube.js')
var editor = require('../config/editor.js')
var songManager = require('../config/song-manager.js')

function beatSelect (event) {
  if ( editor.status && player.getState() === 'paused') {
    if ( event.key === editor.shortCuts.nextQuarterBeat ) {
      player.seek(player.getCurrentTime() + ( songManager.getTempo() / editor.adjustments.beatSelectorTempo ))
    } else if ( event.key === editor.shortCuts.previousQuarterBeat ) {
      player.seek(player.getCurrentTime() - ( songManager.getTempo() / editor.adjustments.beatSelectorTempo ))
    } else if ( event.key === editor.shortCuts.nextBeat ) {
      player.seek(player.getCurrentTime() + ( songManager.getTempo() / ( editor.adjustments.beatSelectorTempo / 4 )))
    } else if ( event.key === editor.shortCuts.previousBeat ) {
      player.seek(player.getCurrentTime() - ( songManager.getTempo() / ( editor.adjustments.beatSelectorTempo / 4 )))
    }
  }
}

module.exports = window.addEventListener('keydown', beatSelect)
