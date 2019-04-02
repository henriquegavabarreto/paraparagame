import * as PIXI from 'pixi.js'
import { backgroundChart } from '../../config/containers.js'

// add chart movement

function setBackgroundChart () {
  setStaff()
}

function setStaff () {
  for ( let i = 0; i <= 1200; i += 56 ) {
    let staff = new PIXI.Sprite.fromImage('../assets/staff.png')
    staff.x = 20
    staff.y = i
    staff.scale.x = 0.9
    backgroundChart.addChild(staff)
  }
}

export { setBackgroundChart }
