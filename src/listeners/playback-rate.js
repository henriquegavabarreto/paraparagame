var player = require('../config/youtube.js')

function goSlower () {
  let v = player.getPlaybackRate()
  if ( v > 0.25 ) {
    player.setPlaybackRate(v - 0.25)
  }
}

function goFaster () {
  let v = player.getPlaybackRate()
  if ( v < 2 ) {
    player.setPlaybackRate(v + 0.25)
  }
}

exports.slower = document.getElementById('slower').addEventListener('click', goSlower)

exports.faster = document.getElementById('faster').addEventListener('click', goFaster)
