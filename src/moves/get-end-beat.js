var getHandMove = require('./get-hand-move.js')

function getEndBeat (beat, hand) {
  let handMove = getHandMove (beat, hand)
  if ( handMove[handMove.length - 1] === 'E' ) {
    return beat
  } else if (handMove[handMove.length - 1] === 'S' || handMove[handMove.length - 1] === 'P') {
    return getEndBeat (beat + 1, hand)
  }
}

module.exports = getEndBeat
