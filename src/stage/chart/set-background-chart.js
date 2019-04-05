import * as PIXI from 'pixi.js'
import { backgroundChart } from '../../config/containers.js'
var gameConfig = require('../../config/game-config.js')

// add chart movement

function setBackgroundChart () {
  setStaff()
}

function setStaff () {
  for ( let i = 0; i <= gameConfig.height; i += 56 ) {
    let staff = new PIXI.Sprite.fromImage('https://henriquegavabarreto.github.io/paraparagame/assets/staff.png')
    staff.x = 20
    staff.y = i
    staff.scale.x = 0.9
    backgroundChart.addChild(staff)
  }
}

export { setBackgroundChart }
