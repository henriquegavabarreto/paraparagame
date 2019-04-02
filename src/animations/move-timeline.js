import { guideNumbers, elements, backgroundChart } from '../config/containers.js'
var songManager = require('../config/song-manager.js')

function moveTimeline () {
  let timelinePosition = -56 * songManager.getCurrentBeat()
  backgroundChart.y = timelinePosition
  guideNumbers.y = timelinePosition
  elements.y = timelinePosition
}

export { moveTimeline }
