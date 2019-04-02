import { fixedGraphics } from '../config/containers.js'
var player = require('../config/youtube.js')

function updateTimeText () {
  let timeText = fixedGraphics.getChildByName('timeText')
  timeText.text = player.getCurrentTime()
}

export { updateTimeText }
