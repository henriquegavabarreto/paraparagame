var gameConfig = require('../../config/game-config.js')
import { grid } from '../../config/grid.js'

function drawCue (handMove, size, graphics) {
  if(handMove[0] === 'S'){
    graphics.lineStyle(gameConfig.cue.lineWidth, gameConfig.colors.sharp, 1)
    graphics.drawCircle(grid[handMove[1]].x, grid[handMove[1]].y, size)
  } else if (handMove[0] === 'H' && handMove[2] === 'S') {
    if (size < 80) {
      graphics.lineStyle(gameConfig.cue.lineWidth, gameConfig.colors.hold, 1)
      graphics.drawCircle(grid[handMove[1]].x, grid[handMove[1]].y, size)
    }
  } else if (handMove[0] === 'M' && handMove.length === 3) {
    graphics.lineStyle(gameConfig.cue.lineWidth, gameConfig.colors.motion, 1)
    graphics.drawCircle(grid[handMove[1]].x, grid[handMove[1]].y, size)
  }
}

export default drawCue
