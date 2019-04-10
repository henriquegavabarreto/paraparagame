var player = require('./youtube.js')
var offset = require('../../data/dance-chart.js').offset
var bpm = require('../../data/dance-chart.js').bpm

function getTempo () {
  let tempo = 60/bpm
  return tempo
}

function getCurrentBeat () {
  let currentBeat = (player.getCurrentTime() - offset) / getTempo()
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
  let nearestBeatTime = (( (getNearestBeat() + t) / 4 ) * getTempo()) + offset
  return nearestBeatTime
}

function getBeatTime(beat) {
  let beatTime = (( beat / 4 ) * getTempo()) + offset
  return beatTime
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
exports.getBeatTime = getBeatTime
exports.getLastBeatTime = getLastBeatTime
