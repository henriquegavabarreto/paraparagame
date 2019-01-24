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


  var videoText = new PIXI.Text( 'Video Time:', {
    fontSize: 18,
    fontFamily: 'Arial',
    fill: '#1ec503',
    align: 'center',
    fontWeight: 500
  })

  videoText.x = 225
  videoText.y = 70

  videoText.cacheAsBitmap = true

  chart.addChild(videoText)

  var timeText = new PIXI.Text( '0', {
    fontSize: 18,
    fontFamily: 'Arial',
    fill: '#1ec503',
    align: 'center',
    fontWeight: 500
  })

  timeText.x = videoText.x + videoText.width + 5
  timeText.y = 70
  timeText.name = 'timeText'

  chart.addChild(timeText)
}

export { setChart }
