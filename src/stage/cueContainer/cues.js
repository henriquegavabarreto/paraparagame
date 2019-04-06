var gameConfig = require('../../config/game-config.js')
import grid from '../../config/grid.js'
import { cueContainer } from '../../config/containers.js'
import * as PIXI from 'pixi.js'
var songManager = require('../../config/song-manager.js')
var player = require('../../config/youtube.js')

function drawCues() {

}

export default drawCues

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
