var danceChart = require('../../data/dance-chart.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')

import { drawGuideNumbers } from '../stage/guideNumbers/guide-numbers.js'

var saveTimingButton = document.getElementById('timing-submitter')
var timingModal = document.getElementById('timing-modal')

function saveOptions () {
  var startInput = document.getElementById('startingPoint').value
  var endInput = document.getElementById('endingPoint').value
  var offsetInput = document.getElementById('offset').value
  var bpmInput = document.getElementById('bpm').value

  validateTiming(startInput, endInput, offsetInput, bpmInput)
}

function validateTiming (startInput, endInput, offsetInput, bpmInput) {
  if (isNaN(startInput) || isNaN(endInput) || isNaN(offsetInput) || isNaN(bpmInput) ||
      startInput === "" || endInput === "" || offsetInput === "" || bpmInput === "") {
        document.getElementById('invalid-timing-warning').style.display = 'block'
  } else {

    let shouldDrawNumbers = false

    if ( ( danceChart.info.song.offset !== offsetInput || danceChart.info.song.bpm !== bpmInput ) && player.getDuration() > 0) {
      shouldDrawNumbers = true
    }

    danceChart.info.video.start = startInput
    danceChart.info.video.end = endInput
    danceChart.info.song.offset = offsetInput
    danceChart.info.song.bpm = bpmInput

    if ( shouldDrawNumbers ) drawGuideNumbers()

    document.getElementById('invalid-timing-warning').style.display = 'none'

    timingModal.classList.toggle("show-timing-options")

    editor.status = true
  }
}

const saveTimingOptions = saveTimingButton.addEventListener('click', saveOptions)


export { saveTimingOptions }
