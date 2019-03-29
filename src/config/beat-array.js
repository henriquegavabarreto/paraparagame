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

function sort () {
  editor.beatArray.sort(function(a,b){ return a - b })
}

exports.add = add
exports.clear = clear
exports.sort = sort
