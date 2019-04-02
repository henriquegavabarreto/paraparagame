var getHandMove = require('./get-hand-move.js')

function getStartBeat (beat, hand) {
  let handMove = getHandMove (beat, hand)
  if ( handMove[handMove.length - 1] === 'S' ) {
    return beat
  } else {
    return getStartBeat (beat - 1, hand)
  }
}

module.exports = getStartBeat
