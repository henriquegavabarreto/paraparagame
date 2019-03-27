import * as PIXI from 'pixi.js'
import { backgroundChart } from '../../config/containers.js'

function setBackgroundChart () {
  setStaff()

  setGuideline()

  setVideoText()

  setTimeText()
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

function setGuideline () {
  let guideline = PIXI.Sprite.fromImage('../assets/guideline.png')
  guideline.x = 6
  guideline.y = 59
  guideline.scale.x = 0.95
  backgroundChart.addChild(guideline)
}

function setVideoText () {
  var videoText = new PIXI.Text( 'Video Time:', {
    fontSize: 18,
    fontFamily: 'Arial',
    fill: '#1ec503',
    align: 'center',
    fontWeight: 500
  })

  videoText.x = 225
  videoText.y = 70
  videoText.name = 'videoText'

  videoText.cacheAsBitmap = true

  backgroundChart.addChild(videoText)
}

function setTimeText () {
  let videoText = backgroundChart.getChildByName('videoText')

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

  backgroundChart.addChild(timeText)
}

export { setBackgroundChart }
