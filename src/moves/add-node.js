var player = require('../config/youtube.js')
var editor = require('../config/editor.js')
var songManager = require('../config/song-manager.js')
var getHandMove = require('./get-hand-move.js')
var checkMoves = require('./check-moves.js')
var danceChart = require('../../data/dance-chart.js')
var getStartBeat = require('./get-start-beat.js')
import { enableCircleClick } from '../stage/circleSelection/enable-circle-click.js'

function addNode (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if (event.key === 'a') {
      editor.selectedHand = 'L'
      setNode()
    } else if (event.key === 's') {
      editor.selectedHand = 'R'
      setNode()
    }
  }
}

var addNodeListener = document.getElementById('canvas').addEventListener('keyup', addNode)

function setHoldNode() {
  let startBeat = getStartBeat(songManager.getNearestBeat(), editor.selectedHand)
  let originalPosition = getHandMove(startBeat, editor.selectedHand)[1]
  let moveIndex = checkMoves()
  let move = danceChart.moves[moveIndex]
  move = move.split(',')
  if ( editor.selectedHand === 'L') {
    move[2] = 'H' + originalPosition + 'P'
  } else {
    move[3] = 'H' + originalPosition + 'P'
  }
  danceChart.moves[moveIndex] = move.join(',')
}

function setNode () {
  let handMove = getHandMove(songManager.getNearestBeat(), editor.selectedHand)
  if(handMove[handMove.length - 1] === 'P') {
    if(handMove[0] === 'H') {
      setHoldNode()
    } else {
      editor.changingMove = true
      enableCircleClick()
    }
  }
}

export { addNodeListener }
