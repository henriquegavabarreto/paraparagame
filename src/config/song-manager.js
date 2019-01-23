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

function getCurrentQuarterBeat () {
  let currentQuarterBeat = getCurrentBeat() * 4
  return currentQuarterBeat
}

function getNearestBeat () {
  let nearestBeat = Math.floor(getCurrentQuarterBeat())
  return nearestBeat
}

function getNearestBeatTime () {
  let nearestBeatTime = (( getNearestBeat() / 4 ) * getTempo()) + song.offset
  return nearestBeatTime
}

exports.getTempo = getTempo
exports.getCurrentBeat = getCurrentBeat
exports.getCurrentQuarterBeat = getCurrentQuarterBeat
exports.getNearestBeat = getNearestBeat
exports.getNearestBeatTime = getNearestBeatTime
