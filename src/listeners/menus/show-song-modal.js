var danceChart = require('../../../data/dance-chart.js')
var editor = require('../../config/editor.js')
var player = require('../../config/youtube.js')

let songModal = document.getElementById('song-modal')

function showSongModal() {
  if(!editor.areaSelect){
    if( player.getState() !== 'paused' ) {
      player.pause()
    }
    songModal.classList.toggle("show-song-options")
    document.getElementById('song-title').value = danceChart.title
    document.getElementById('song-artist').value = danceChart.artist
    document.getElementById('video-id').value = danceChart.videoId

    editor.status = false
  }
}

module.exports = showSongModal
