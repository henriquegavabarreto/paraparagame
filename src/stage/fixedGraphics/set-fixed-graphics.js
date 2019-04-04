import * as PIXI from 'pixi.js'
import { fixedGraphics } from '../../config/containers.js'

function setFixedGraphics () {
  setGuideline()

  setVideoText()

  setTimeText()
}

function setGuideline () {
  let guideline = PIXI.Sprite.fromImage('./../../../assets/guideline.png')
  guideline.x = 6
  guideline.y = 59
  guideline.scale.x = 0.95
  fixedGraphics.addChild(guideline)
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

  fixedGraphics.addChild(videoText)
}

function setTimeText () {
  let videoText = fixedGraphics.getChildByName('videoText')

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

  fixedGraphics.addChild(timeText)
}

export { setFixedGraphics }
