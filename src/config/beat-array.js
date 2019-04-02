var editor = require('../config/editor.js')
var songManager = require('../config/song-manager.js')

// adds nearest beat to the array
function add (beat = songManager.getNearestBeat()) {
  if ( !editor.beatArray.includes(beat) ) editor.beatArray.push(beat)
}

// clears the array
function clear () {
  editor.beatArray = []
}

function sort () {
  editor.beatArray.sort(function(a,b){ return a - b })
}

function getCircleCount () {
  if ( editor.beatArray.length === 1 ) {
    return 1
  } else {
    return 2
  }
}

exports.add = add
exports.clear = clear
exports.sort = sort
exports.getCircleCount = getCircleCount
