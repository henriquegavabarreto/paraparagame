import * as PIXI from 'pixi.js'
import { chart } from '../../config/containers.js'

function setChart () {
  for ( let i = 0; i <= 1200; i += 56 ) {
    let staff = new PIXI.Sprite.fromImage('../assets/staff.png')
    staff.x = 20
    staff.y = i
    staff.scale.x = 0.9
    chart.addChild(staff)
  }

  let guideline = new PIXI.Sprite.fromImage('../assets/guideline.png')
  guideline.x = 6
  guideline.y = 59
  guideline.scale.x = 0.95
  chart.addChild(guideline)
}

export { setChart }
