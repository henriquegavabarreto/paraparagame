var danceChart = require('../../../data/dance-chart.js')
var editor = require('../../config/editor.js')
var player = require('../../config/youtube.js')

let timingModal = document.getElementById('timing-modal')

function showTimingModal() {
  if (!editor.areaSelect) {
    if( player.getState() !== 'paused' ) {
      player.pause()
    }

    timingModal.classList.toggle("show-timing-options")
    document.getElementById('startingPoint').value = danceChart.videoStart
    document.getElementById('endingPoint').value = danceChart.videoEnd
    document.getElementById('offset').value = danceChart.offset
    document.getElementById('bpm').value = danceChart.bpm

    editor.status = false
  }
}

module.exports = showTimingModal
