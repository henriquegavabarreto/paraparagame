var songManager = require('../config/song-manager.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')
var danceChart = require('../../data/dance-chart.js')
var checkMoves = require('./check-moves.js')
import { redrawNotes } from '../stage/elements/redraw-notes.js'

function getFirstBeat (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.paste && event.repeat === false ) {
      let addMoves = true
      let movesToAdd = []
      for(let move of editor.clipboard) {
        move = move.split(',')
        let beat = parseInt(move[0])
        let newBeat = songManager.getNearestBeat() + (beat - editor.copySelection[0])
        if (checkMoves(newBeat) !== -1) {
          addMoves = false
          break
        }
        move[0] = newBeat
        move = move.join(',')
        movesToAdd.push(move)
      }
      if (addMoves) {
        for (let move of movesToAdd) {
          danceChart.moves.push(move)
        }
        redrawNotes(0,danceChart.bpm)
      }
    }
  }
}

var pasteKeyDown = document.getElementById('canvas').addEventListener('keydown', getFirstBeat)

export { pasteKeyDown }
