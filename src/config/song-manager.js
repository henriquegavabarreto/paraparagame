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
  let nearestBeat = Math.floor((getCurrentQuarterBeat() * getTempo()) + song.offset) / 4
  return nearestBeat
}

exports.getTempo = getTempo
exports.getCurrentBeat = getCurrentBeat
exports.getCurrentQuarterBeat = getCurrentQuarterBeat
exports.getNearestBeat = getNearestBeat
