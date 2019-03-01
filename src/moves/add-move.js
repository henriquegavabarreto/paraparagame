var danceChart = require('../../data/dance-chart.js')
var songManager = require('../config/song-manager.js')

function addMove () {
  if(!checkMoves()){
    danceChart.moves.push(`${songManager.getNearestBeat()},0,0,0`)
    console.log(danceChart)
  }
}

function checkMoves () {
  for(let i = 0; i < danceChart.moves.length; i++){
    let move = danceChart.moves[i]
    move = move.split(',')
    if(move[0] == songManager.getNearestBeat()){
      return true
      break
    }
  }
}

module.exports = addMove
