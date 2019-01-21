var player = require('../config/youtube.js')
var editor = require('../config/editor.js')

function goSlower () {
  if ( editor.status ) {
    let v = player.getPlaybackRate()
    if ( v > 0.25 ) {
      v = v - 0.25
      player.setPlaybackRate(v)
      document.getElementById('playback-rate').innerHTML = `Playback Rate: ${v}`
    }
  }
}

function goFaster () {
  if ( editor.status ) {
    let v = player.getPlaybackRate()
    if ( v < 2 ) {
      v = v + 0.25
      player.setPlaybackRate(v)
      document.getElementById('playback-rate').innerHTML = `Playback Rate: ${v}`
    }
  }
}

exports.slower = document.getElementById('slower').addEventListener('click', goSlower)

exports.faster = document.getElementById('faster').addEventListener('click', goFaster)
