import { elements } from '../config/containers.js'
var songManager = require('../config/song-manager.js')
var checkMoves = require('./check-moves.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')
var danceChart = require('../../data/dance-chart.js')
var getHandMove = require('./get-hand-move.js')

function deleteNote (event) {
  if ( editor.status && player.getState() === 'paused' && !editor.areaSelect ) {
    if ( event.key === 'q' ) {
      let handMove = getHandMove(songManager.getNearestBeat(), 'L')
      if ( handMove !== 'X' ){
        searchAndDelete(songManager.getNearestBeat(), handMove, 'L')
        removeNoInfoMoves()
      }
    } else if ( event.key === 'w' ) {
      let handMove = getHandMove(songManager.getNearestBeat(), 'R')
      if ( handMove !== 'X' ){
        searchAndDelete(songManager.getNearestBeat(), handMove, 'R')
        removeNoInfoMoves()
      }
    }
  }
}

var deleteMove = window.addEventListener('keydown', deleteNote)

export { deleteMove }

function searchAndDelete (beat, handMove, hand) {
  if(handMove[0] === 'S') { // if sharp move
    elements.removeChild(elements.getChildByName(`${beat}${hand}`)) // remove note
    removeHandInfo(beat, hand)
  } else if ( handMove[0] === 'H' || handMove[0] === 'M' ) {
    let startBeat = getStartBeat(beat, hand)
    let endBeat = getEndBeat(beat, hand)
    for (let i = startBeat; i <= endBeat; i++) {
      elements.removeChild(elements.getChildByName(`${i}${hand}`))
      removeHandInfo(i, hand)
    }
    // if ( handMove[handMove.length - 1] === 'S' ) { // if it is the starting movement
    //   let endBeat = getEndBeat(beat, hand)
    //   for (let i = beat; i <= endBeat; i++) {
    //     elements.removeChild(elements.getChildByName(`${i}${hand}`))
    //     removeHandInfo(i, hand)
    //   }
    // } else if ( handMove[handMove.length - 1] === 'P' ) {
    //   let startBeat = getStartBeat(beat, hand)
    //   let endBeat = getEndBeat(beat, hand)
    //   for (let i = startBeat; i <= endBeat; i++) {
    //     elements.removeChild(elements.getChildByName(`${i}${hand}`))
    //     removeHandInfo(i, hand)
    //   }
    // } else if ( handMove[handMove.length - 1] === 'E' ) {
    //   let startBeat = getStartBeat(beat, hand)
    //   let endBeat = getEndBeat(beat, hand)
    //   for (let i = startBeat; i <= endBeat; i++) {
    //     elements.removeChild(elements.getChildByName(`${i}${hand}`))
    //     removeHandInfo(i, hand)
    //   }
    // }
  }
}

function getStartBeat (beat, hand) {
  let handMove = getHandMove (beat, hand)
  if ( handMove[handMove.length - 1] === 'S' ) {
    return beat
  } else {
    return getStartBeat (beat - 1, hand)
  }
}
 function getEndBeat (beat, hand) {
   let handMove = getHandMove (beat, hand)
   if ( handMove[handMove.length - 1] === 'E' ) {
     return beat
   } else {
     return getEndBeat (beat + 1, hand)
   }
 }

function removeHandInfo (beat, hand) {
  if ( hand === 'L') { // if left hand
    let moveToChange = danceChart.moves[checkMoves(beat)].split(',') // split move
    moveToChange[2] = 'X' // change the move that needs to be changed
    danceChart.moves[checkMoves(beat)] = moveToChange.join(',') // change it in the danceChart
  } else {
    let moveToChange = danceChart.moves[checkMoves(beat)].split(',') // split move
    moveToChange[3] = 'X' // change the move that needs to be changed
    danceChart.moves[checkMoves(beat)] = moveToChange.join(',') // change it in the danceChart
  }
}

function removeNoInfoMoves () {
  for (let i = danceChart.moves.length - 1; i >= 0; i--) {
    let move = danceChart.moves[i].split(',')
    if (move[2] === 'X' && move[3] === 'X') danceChart.moves.splice(i, 1)
  }
}
