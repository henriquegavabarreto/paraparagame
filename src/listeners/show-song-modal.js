var danceChart = require('../../data/dance-chart.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')

let songModal = document.getElementById('song-modal')
let songButton = document.getElementById('song-info-button')

function toggleModal() {
  if( player.getState() !== 'paused' ) {
    player.pause()
  }
  songModal.classList.toggle("show-song-options")
  document.getElementById('song-title').value = danceChart.info.song.title
  document.getElementById('song-artist').value = danceChart.info.song.artist
  document.getElementById('video-id').value = danceChart.info.video.videoId

  editor.status = false
}

module.exports = songButton.addEventListener('click', toggleModal)
