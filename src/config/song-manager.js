var player = require('./youtube.js')
var song = require('../../data/dance-chart.js').info.song

function getTempo () {
  let tempo = 60/song.bpm
  return tempo
}

function getCurrentBeat () {
  let currentBeat = (player.getCurrentTime() - song.offset) / getTempo()
  return currentBeat
}

function getCurrentRoundBeat () {
  return Math.round(getCurrentBeat())
}

function getCurrentQuarterBeat () {
  let currentQuarterBeat = getCurrentBeat() * 4
  return currentQuarterBeat
}

function getNearestBeat () {
  let nearestBeat = Math.round(getCurrentQuarterBeat())
  return nearestBeat
}

function getNearestBeatTime (t = 0) {
  let nearestBeatTime = (( (getNearestBeat() + t) / 4 ) * getTempo()) + song.offset
  return nearestBeatTime
}

function getLastBeatTime () {
  for( let lastBeatTime = 0; lastBeatTime <= player.getDuration(); lastBeatTime += getTempo() ) {
    if (lastBeatTime + getTempo() > player.getDuration()) {
      return lastBeatTime
    }
  }
}

exports.getTempo = getTempo
exports.getCurrentBeat = getCurrentBeat
exports.getCurrentRoundBeat = getCurrentRoundBeat
exports.getCurrentQuarterBeat = getCurrentQuarterBeat
exports.getNearestBeat = getNearestBeat
exports.getNearestBeatTime = getNearestBeatTime
exports.getLastBeatTime = getLastBeatTime
