var danceChart = require('../../data/dance-chart.js')
import { elements } from '../config/containers.js'

function resetDanceChart () {
  danceChart.moves = []

  removeAllNotes()
}

export { resetDanceChart }

function removeAllNotes() {
  if (elements.children.length > 0) {
    elements.removeChildren()
  }
}
