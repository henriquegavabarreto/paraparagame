var gameConfig = require('../../config/game-config.js')
import { cueContainer } from '../../config/containers.js'
import * as PIXI from 'pixi.js'
import drawCue from './draw-cue.js'
var danceChart = require('../../../data/dance-chart.js')
var songManager = require('../../config/song-manager.js')

function drawStaticCues () {
  if(cueContainer.getChildByName('staticCues')) cueContainer.removeChild(cueContainer.getChildByName('staticCues'))
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
    var staticCues = new PIXI.Graphics()
    movesToDraw.forEach((move) => {
      let beat = move[0]
      let leftHand = move[2]
      let rightHand = move[3]
      let proportion = (gameConfig.advanceSpawn-(beat-songManager.getCurrentQuarterBeat()))/gameConfig.advanceSpawn
      let size = gameConfig.cue.size * proportion
      if (rightHand !== 'X') drawCue(rightHand, size, staticCues)
      if (leftHand !== 'X') drawCue(leftHand, size, staticCues)
    })
    staticCues.name = 'staticCues'
    cueContainer.addChild(staticCues)
  }
}

export default drawStaticCues



// class Cue {
//
//   constructor (type, position, beat) {
//     if ( type === 'sharp' ) {
//       this.color = gameConfig.colors.sharp
//     } else if ( type === 'hold' ) {
//       this.color = gameConfig.colors.hold
//     } else {
//       this.color = gameConfig.colors.motion
//     }
//
//     this.x = grid[position].x
//     this.y = grid[position].y
//     this.beat = beat
//     this.size = 0
//   }
//
//   update () {
//     if ((gameConfig.advanceSpawn-(this.beat-songManager.getCurrentBeat()))/gameConfig.advanceSpawn >= 0 &&
//   (gameConfig.advanceSpawn-(this.beat-songManager.getCurrentBeat()))/gameConfig.advanceSpawn <= 1) {
//       this.size = gameConfig.cue.size * (gameConfig.advanceSpawn-(this.beat-currentBeat))/gameConfig.advanceSpawn
//     }
//   }
//
//   draw () {
//     graphics.lineStyle(gameConfig.cue.lineWidth, this.color, 1)
//     graphics.drawCircle(this.x, this.y, this.size)
//   }
//
//   remove () {
//     if ((gameConfig.advanceSpawn-(this.beat-songManager.getCurrentBeat()))/gameConfig.advanceSpawn < 0 ||
//   (gameConfig.advanceSpawn-(this.beat-songManager.getCurrentBeat()))/gameConfig.advanceSpawn > 1) {
//       return true
//     }
//   }
//
// }
