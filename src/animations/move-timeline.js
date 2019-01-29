import { guideNumbers, elements } from '../config/containers.js'
var songManager = require('../config/song-manager.js')

function moveTimeline () {
  let timelinePosition = -56 * songManager.getCurrentBeat()
  guideNumbers.y = timelinePosition
  elements.y = timelinePosition
}

export { moveTimeline }
