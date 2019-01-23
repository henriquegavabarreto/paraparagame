var player = require('./../config/youtube.js')
var songManager = require('./../config/song-manager.js')

function goToNearestBeat () {
  player.seek(songManager.getNearestBeatTime())
}

module.exports = player.on('paused', goToNearestBeat)
