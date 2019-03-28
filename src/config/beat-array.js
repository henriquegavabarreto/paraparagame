var editor = require('../config/editor.js')
var songManager = require('../config/song-manager.js')

// adds nearest beat to the array
function add () {
  if ( !editor.beatArray.includes(songManager.getNearestBeat()) ) editor.beatArray.push(songManager.getNearestBeat())
}

// clears the array
function clear () {
  editor.beatArray = []
}

exports.add = add
exports.clear = clear
