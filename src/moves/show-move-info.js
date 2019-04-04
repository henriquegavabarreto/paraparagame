var getHandMove = require('./get-hand-move.js')
var songManager = require('../config/song-manager.js')

function showMoveInfo () {
  var leftHandMoveInfo = document.getElementById('left-hand-move-info')
  var rightHandMoveInfo = document.getElementById('right-hand-move-info')

  let beat = songManager.getNearestBeat()

  let leftHandMove = getHandMove(beat, 'L')
  let rightHandMove = getHandMove(beat, 'R')

  setHandInformation(leftHandMove, leftHandMoveInfo)
  setHandInformation(rightHandMove, rightHandMoveInfo)
}

function setHandInformation (handMove, element) {
  if(handMove[0] === 'S'){
    element.innerHTML = `Sharp at position ${handMove[1]}`
  } else if (handMove[0] === 'H') {
    if(handMove.length === 2) {
      element.innerHTML = 'Hold in Progress'
    } else {
      element.innerHTML = `Hold at position ${handMove[1]}`
    }
  } else if (handMove[0] === 'M') {
    if(handMove.length === 2) {
      element.innerHTML = 'Motion in Progress'
    } else {
      element.innerHTML = `Motion at position ${handMove[1]}`
    }
  } else {
    element.innerHTML = 'No move'
  }
}

// function changeMoveInfoText (handMove, handTypeInfo, handPositionInfo) {
//   if(handMove === 'X') {
//     handTypeInfo.innerHTML = 'No Type'
//     handPositionInfo.innerHTML = 'No Position'
//   } else {
//     if(handMove[0] === 'S') {
//       handTypeInfo.innerHTML = 'Type: Sharp'
//       handPositionInfo.innerHTML = `Position: ${handMove[1]}`
//     } else if (handMove[0] === 'H') {
//       if(handMove[2] === 'S') {
//         handTypeInfo.innerHTML = 'Type: Hold Start'
//       } else if (handMove[1] === 'P') {
//         handTypeInfo.innerHTML = 'Type: Hold in Progress'
//       } else {
//         handTypeInfo.innerHTML = 'Type: Hold End'
//       }
//       handPositionInfo.innerHTML = `Position: ${handMove[1]}`
//     } else {
//       if(handMove[2] === 'S') {
//         handTypeInfo.innerHTML = 'Type: Motion Start'
//       } else if (handMove[2] === 'P') {
//         handTypeInfo.innerHTML = 'Type: Motion in Progress'
//       } else {
//         handTypeInfo.innerHTML = 'Type: Motion End'
//       }
//       handPositionInfo.innerHTML = `Position: ${handMove[1]}`
//     }
//   }
// }

module.exports = showMoveInfo
