var danceChart = require('../../data/dance-chart.js')

var saveTimingButton = document.getElementById('timing-submitter')
var timingModal = document.getElementById('timing-modal')

function saveTimingOptions () {
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
    danceChart.info.video.start = startInput
    danceChart.info.video.end = endInput
    danceChart.info.song.offset = offsetInput
    danceChart.info.song.bpm = bpmInput

    document.getElementById('invalid-timing-warning').style.display = 'none'

    timingModal.classList.toggle("show-timing-options")
  }
}

module.exports = saveTimingButton.addEventListener('click', saveTimingOptions)
