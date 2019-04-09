var gameConfig = require('../../config/game-config.js')
import { cueContainer } from '../../config/containers.js'
import drawCue from './draw-cue.js'
var danceChart = require('../../../data/dance-chart.js')
var songManager = require('../../config/song-manager.js')
import drawHoldCues from './draw-hold-cues.js'

function drawCues () {
  var cues = cueContainer.getChildByName('cues')
  cues.clear()
  let movesToDraw = []
  let holdsToDraw = []
  danceChart.moves.forEach((move) => {
    move = move.split(',')
    let beat = move[0]
    if ( beat >= songManager.getCurrentQuarterBeat() && beat <= songManager.getCurrentQuarterBeat() + gameConfig.advanceSpawn) movesToDraw.push(move)
    if ( beat == songManager.getNearestBeat() && (move[2][0] === 'H' || move[3][0] === 'H')) holdsToDraw.push(move)
  })
  if (movesToDraw.length > 0) {
    movesToDraw.forEach((move) => {
      let beat = move[0]
      let leftHand = move[2]
      let rightHand = move[3]
      let proportion = (gameConfig.advanceSpawn-(beat-songManager.getCurrentQuarterBeat()))/gameConfig.advanceSpawn
      let size = gameConfig.cue.size * proportion
      if (rightHand !== 'X') drawCue(rightHand, size, cues)
      if (leftHand !== 'X') drawCue(leftHand, size, cues)
    })
  }
  if (holdsToDraw.length > 0) {
    holdsToDraw.forEach((move) => {
      let beat = parseInt(move[0])
      if (move[2][0] === 'H') drawHoldCues(beat, 'L', cues)
      if (move[3][0] === 'H') drawHoldCues(beat, 'R', cues)
    })
  }
}

export default drawCues
