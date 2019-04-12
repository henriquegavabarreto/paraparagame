var songManager = require('../config/song-manager.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')
var danceChart = require('../../data/dance-chart.js')

function getFirstBeat (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.paste && event.repeat === false ) {
      let movesToAdd = []
      editor.clipboard.forEach((move) => {
        move = move.split(',')
        let beat = parseInt(move[0])
        move[0] = songManager.getNearestBeat() + (beat - editor.copySelection[0])
        move = move.join(',')
        movesToAdd.push(move)
      })
      console.log(movesToAdd)
    }
  }
}

var pasteKeyDown = document.getElementById('canvas').addEventListener('keydown', getFirstBeat)

module.exports = pasteKeyDown
