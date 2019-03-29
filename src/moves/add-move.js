var danceChart = require('../../data/dance-chart.js')
var songManager = require('../config/song-manager.js')
var editor = require('../config/editor.js')
var checkMoves = require('./check-moves.js')

function addMove (pressedKey, beat) {
  let beatOnMove = checkMoves(beat)

  if ( beatOnMove === -1 ) { // if there is no move on the beat yet
    if ( pressedKey === editor.shortCuts.rightHand ) { // S for selected and X for no data
      danceChart.moves.push(`${beat},1,X,S`)
    } else if ( pressedKey === editor.shortCuts.leftHand ) {
      danceChart.moves.push(`${beat},1,S,X`)
    }
  } else { // if there is a move on this beat
    let moves = danceChart.moves[beatOnMove].split(',')
    if ( pressedKey === editor.shortCuts.rightHand && moves[3] === 'X') { // select right hand
      moves[3] = 'S'
      moves = moves.join(',')
      danceChart.moves[beatOnMove] = moves
    } else if ( pressedKey === editor.shortCuts.leftHand && moves[2] === 'X' ) { // select left hand
      moves[2] = 'S'
      moves = moves.join(',')
      danceChart.moves[beatOnMove] = moves
    }
  }
}

module.exports = addMove
