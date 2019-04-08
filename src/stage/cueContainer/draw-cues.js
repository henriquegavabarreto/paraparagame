var gameConfig = require('../../config/game-config.js')
import { cueContainer } from '../../config/containers.js'
import drawCue from './draw-cue.js'
var danceChart = require('../../../data/dance-chart.js')
var songManager = require('../../config/song-manager.js')

function drawCues () {
  var cues = cueContainer.getChildByName('cues')
  cues.clear()
  let movesToDraw = []
  danceChart.moves.forEach((move) => {
    move = move.split(',')
    let beat = move[0]
    let proportion = (gameConfig.advanceSpawn-(beat-songManager.getCurrentQuarterBeat()))/gameConfig.advanceSpawn
    if (proportion > 0 && proportion <= 1) {
      movesToDraw.push(move)
    }
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
}

export default drawCues
