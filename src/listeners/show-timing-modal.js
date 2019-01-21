var danceChart = require('../../data/dance-chart.js')

let timingModal = document.getElementById('timing-modal')
let timingButton = document.getElementById('timing-button')

function toggleModal() {
  timingModal.classList.toggle("show-timing-options")
  document.getElementById('startingPoint').value = danceChart.info.video.start
  document.getElementById('endingPoint').value = danceChart.info.video.end
  document.getElementById('offset').value = danceChart.info.song.offset
  document.getElementById('bpm').value = danceChart.info.song.bpm
}

module.exports = timingButton.addEventListener('click', toggleModal)
