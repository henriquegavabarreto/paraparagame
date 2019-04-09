var getEndBeat = require('../../moves/get-end-beat.js')
var getStartBeat = require('../../moves/get-start-beat.js')
import { grid } from '../../config/grid.js'
var songManager = require('../../config/song-manager.js')
var gameConfig = require('../../config/game-config.js')
var getHandMove = require('../../moves/get-hand-move.js')

function drawHoldCues (beat, hand, graphics) {
  let startBeat = getStartBeat(beat, hand)
  let endBeat = getEndBeat(beat, hand)
  let duration = (endBeat - startBeat) + 1
  let proportion = (duration-((startBeat + duration) - songManager.getCurrentQuarterBeat()))/duration
  let position = getHandMove(startBeat, hand)[1]
  if (proportion > 0 && proportion <= 1) {
    let radius = 2 * Math.PI * proportion
    graphics.lineStyle(gameConfig.cue.lineWidth, gameConfig.colors.hold, 1)
    graphics.arc(grid[position].x, grid[position].y, gameConfig.cue.size, 0, radius)
  }
}

export default drawHoldCues
