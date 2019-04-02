var editor = require('../config/editor')

function getMoveType () {
  if ( editor.beatArray.length === 1 ) {
    return 'S'
  } else if (editor.beatArray.length > 1 && editor.selectedCircles[0] !== editor.selectedCircles[1]) {
    return 'M'
  } else if (editor.beatArray.length > 1 && editor.selectedCircles[0] === editor.selectedCircles[1]) {
    return 'H'
  }
}

module.exports = getMoveType
