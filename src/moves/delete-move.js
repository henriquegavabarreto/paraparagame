import { elements } from '../config/containers.js'
var songManager = require('../config/song-manager.js')
var checkMoves = require('./check-moves.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')
var danceChart = require('../../data/dance-chart.js')

function deleteNote (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === 'Backspace' ) {
      let moveIndex = checkMoves()
      if (moveIndex !== -1) {
        elements.removeChild(elements.getChildByName(`${songManager.getNearestBeat()}L`))
        elements.removeChild(elements.getChildByName(`${songManager.getNearestBeat()}R`))
        danceChart.moves.splice(moveIndex, 1)
      }
    }
  }
}

var deleteMove = window.addEventListener('keydown', deleteNote)

export { deleteMove }
