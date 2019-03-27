import { backgroundChart } from '../config/containers.js'
var player = require('../config/youtube.js')

function updateTimeText () {
  let timeText = backgroundChart.getChildByName('timeText')
  timeText.text = player.getCurrentTime()
}

export { updateTimeText }
