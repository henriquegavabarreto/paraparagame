var danceChart = require('../../data/dance-chart.js')

let songModal = document.getElementById('song-modal')
let songButton = document.getElementById('song-info-button')

function toggleModal() {
  songModal.classList.toggle("show-song-options")
  document.getElementById('song-title').value = danceChart.info.song.title
  document.getElementById('song-artist').value = danceChart.info.song.artist
  document.getElementById('video-id').value = danceChart.info.video.videoId
}

module.exports = songButton.addEventListener('click', toggleModal)
