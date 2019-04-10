var danceChart = require('../../../data/dance-chart.js')
import { resetDanceChart } from '../../danceChart/reset-dance-chart.js'
var player = require('../../config/youtube.js')
var editor = require('../../config/editor.js')
import { startAnimation } from '../../animations/animation-manager.js'
import { drawGuideNumbers } from '../../stage/guideNumbers/draw-guide-numbers.js'
import { redrawStaff } from '../../stage/chart/redraw-staff.js'

var saveSongButton = document.getElementById('song-submitter')
var songModal = document.getElementById('song-modal')

function saveOptions () {
  var titleInput = document.getElementById('song-title').value
  var artistInput = document.getElementById('song-artist').value
  var videoIdInput = document.getElementById('video-id').value

  validateSong(titleInput, artistInput, videoIdInput)
}

function validateSong (titleInput, artistInput, videoIdInput) {
  if (videoIdInput.length === 11 || videoIdInput.length === 0) { // This should check if the ID is valid on the API, though

    if (videoIdInput !== danceChart.videoId && videoIdInput.length !== 0) {
      resetDanceChart()
      player.load(videoIdInput)
      player.play()
      setTimeout(function () {
        redrawStaff()
        drawGuideNumbers()
        player.pause()
        startAnimation()
      }, 5000)

    }

    danceChart.title = titleInput
    danceChart.artist = artistInput
    danceChart.videoId = videoIdInput

    document.getElementById('invalid-song-warning').style.display = 'none'

    songModal.classList.toggle("show-song-options")

    editor.status = true
  } else {
    document.getElementById('invalid-song-warning').style.display = 'block'
  }
}

const saveSongOptions = saveSongButton.addEventListener('click', saveOptions)

export { saveSongOptions }
