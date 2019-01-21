var danceChart = require('../../data/dance-chart.js')
var player = require('../config/youtube.js')
var editor = require('../config/editor.js')

var saveSongButton = document.getElementById('song-submitter')
var songModal = document.getElementById('song-modal')

function saveSongOptions () {
  var titleInput = document.getElementById('song-title').value
  var artistInput = document.getElementById('song-artist').value
  var videoIdInput = document.getElementById('video-id').value

  validateSong(titleInput, artistInput, videoIdInput)
}

function validateSong (titleInput, artistInput, videoIdInput) {
  if (videoIdInput !== "") {

    if (videoIdInput !== danceChart.info.video.videoId) {
      player.load(videoIdInput)
    }

    danceChart.info.song.title = titleInput
    danceChart.info.song.artist = artistInput
    danceChart.info.video.videoId = videoIdInput

    document.getElementById('invalid-song-warning').style.display = 'none'

    songModal.classList.toggle("show-song-options")

    editor.status = true
  } else {
    document.getElementById('invalid-song-warning').style.display = 'block'
  }
}

module.exports = saveSongButton.addEventListener('click', saveSongOptions)
