var checkMoves = require('../moves/check-moves.js')
var danceChart = require('../../data/dance-chart.js')
var getHandMove = require('../moves/get-hand-move.js')
var songManager = require('../config/song-manager.js')
var editor = require('../config/editor.js')
var showMoveInfo = require('../moves/show-move-info.js')
import { disableCircleClick } from '../stage/circleSelection/disable-circle-click.js'
import drawStaticCues from '../stage/cueContainer/draw-static-cues.js'

function addSelectionToMove (position) {
  let handMove = getHandMove(songManager.getNearestBeat(), editor.selectedHand)
  let moveIndex = checkMoves()
  let move = danceChart.moves[moveIndex]
  move = move.split(',')
  if(editor.selectedHand === 'L') {
    move[2] = handMove[0] + position + 'P'
  } else if (editor.selectedHand === 'R') {
    move[3] = handMove[0] + position + 'P'
  }
  danceChart.moves[moveIndex] = move.join(',')
  editor.changingMove = false
  disableCircleClick()
  setTimeout(function () {
    showMoveInfo()
    drawStaticCues()
  }, 150)
}

export { addSelectionToMove }
