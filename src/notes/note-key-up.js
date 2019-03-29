var checkNoteType = require('./check-note-type.js')
var beatArray = require('../config/beat-array.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')
var addMove = require('../moves/add-move.js')
var danceChart = require('../../data/dance-chart.js')
import { getHandPositions } from '../circles/get-hand-positions.js'

function stopNoteCreation (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === editor.shortCuts.rightHand ) {
      if ( editor.keyStatus.xPressed === true ) {
        editor.keyStatus.xPressed = false
        beatArray.sort()
        //checkNoteType()
        addRequiredMoves(event.key)
        getHandPositions()
        //beatArray.clear()
      }
    } else if ( event.key === editor.shortCuts.leftHand) {
      if ( editor.keyStatus.zPressed === true ) {
        editor.keyStatus.zPressed = false
        beatArray.sort()
        //checkNoteType()
        addRequiredMoves(event.key)
        getHandPositions()
        //beatArray.clear()
      }
    }
  }
}

var noteKeyUp = window.addEventListener('keyup', stopNoteCreation)

export { noteKeyUp }

function addRequiredMoves (key) {
  editor.beatArray.forEach(beat => {
    addMove(key, beat)
  })
  console.log(danceChart.moves)
}
