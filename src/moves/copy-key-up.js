var songManager = require('../config/song-manager.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')
var danceChart = require('../../data/dance-chart.js')

function getLastBeat (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.copy ) {
      editor.copySelection.push(songManager.getNearestBeat())
      editor.copySelection.sort((a, b) => a - b)
      danceChart.moves.forEach((move) => {
        let splitMove = move.split(',')
        let beat = parseInt(splitMove[0])
        if (beat >= editor.copySelection[0] && beat <= editor.copySelection[1]) editor.clipboard.push(move)
      })
    }
  }
}

var copyKeyUp = document.getElementById('canvas').addEventListener('keyup', getLastBeat)

module.exports = copyKeyUp
