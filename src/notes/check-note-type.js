var editor = require('../config/editor')

function checkNoteType () {
  if ( editor.beatArray.length === 1 ) {
    console.log('Sharp')
  } else {
    console.log('Hold or Motion')
  }
}

module.exports = checkNoteType
