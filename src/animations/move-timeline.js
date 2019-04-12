import { guideNumbers, elements, backgroundChart, copyPasteSelection } from '../config/containers.js'
var songManager = require('../config/song-manager.js')

function moveTimeline () {
  let timelinePosition = -56 * songManager.getCurrentBeat()
  backgroundChart.y = timelinePosition
  guideNumbers.y = timelinePosition
  elements.y = timelinePosition
  copyPasteSelection.y = timelinePosition
}

export { moveTimeline }
