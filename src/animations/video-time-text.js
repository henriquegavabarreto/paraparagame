import { chart } from '../config/containers.js'
var player = require('../config/youtube.js')

function updateTimeText () {
  let timeText = chart.getChildByName('timeText')
  timeText.text = player.getCurrentTime()
}

export { updateTimeText }
