var danceChart = require('../../data/dance-chart.js')
var songManager = require('../config/song-manager.js')
var editor = require('../config/editor.js')

function addMove (pressedKey) {
  let beatOnMove = checkMoves()

  if ( beatOnMove === -1 ) { // if there is no move on the beat yet
    if ( pressedKey === editor.shortCuts.rightHand ) { // S for selected and X for no data
      danceChart.moves.push(`${songManager.getNearestBeat()},1,X,S`)
    } else if ( pressedKey === editor.shortCuts.leftHand ) {
      danceChart.moves.push(`${songManager.getNearestBeat()},1,S,X`)
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

function checkMoves () {
  if ( danceChart.moves.length === 0 ) {
    return -1
  } else {
    for(let i = 0; i < danceChart.moves.length; i++){
      let move = danceChart.moves[i]
      move = move.split(',')
      if ( move[0] == songManager.getNearestBeat() ) {
        return i
        break
      } else if ( i == danceChart.moves.length - 1) {
        return -1
      }
    }
  }
}

module.exports = addMove
