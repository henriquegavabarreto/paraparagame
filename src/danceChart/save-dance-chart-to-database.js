var firebase = require('../config/firebase.js')
var danceChart = require('../../data/dance-chart.js')
var sortDanceChart = require('./sort-dance-chart.js')
var getSaveTime = require('./get-save-time.js')
var editor = require('../config/editor.js')

var saveDanceChartButton = document.getElementById('save-dance-chart')

function saveToDatabase () {
  if (danceChart.title === '' || danceChart.artist === '' || danceChart.videoId === '' || danceChart.moves.length === 0) {
    alert('Error. \nMake sure you add a Song Title, Artist, videoId and any moves to the Dance Chart')
  } else {
    sortDanceChart()
    var ref = firebase.database().ref('danceCharts')
    ref.once('value').then(function (data) {
      let charts = data.val()
      let chartId = getChartId(charts)
      if ( chartId !== -1 ) {
        let overwrite = confirm('There\'s already a dance chart to this video. Do you want to overwrite it?')
        if (overwrite){
          console.log('Overwrite chart')
          ref.child(`${chartId}`).update({ title: danceChart.title,
            artist: danceChart.artist,
            offset: danceChart.offset,
            bpm: danceChart.bpm,
            videoId: danceChart.videoId,
            videoStart: danceChart.videoStart,
            videoEnd: danceChart.videoEnd,
            moves: danceChart.moves.join(' '),
            updatedAt: getSaveTime()
          })
          closeMenu()
        } else {
          console.log('Don\'t overwrite')
        }
      } else {
        console.log('Save unique chart')
        // newChartData.info.author = userId(?)
        ref.push({ title: danceChart.title,
          artist: danceChart.artist,
          offset: danceChart.offset,
          bpm: danceChart.bpm,
          videoId: danceChart.videoId,
          videoStart: danceChart.videoStart,
          videoEnd: danceChart.videoEnd,
          moves: danceChart.moves.join(' '),
          createdAt: getSaveTime()
        })
        closeMenu()
      }
    })
  }
}

var saveDanceChartListener = saveDanceChartButton.addEventListener('click', saveToDatabase)

module.exports = saveDanceChartListener

function getChartId (charts) {
  let id = -1
  for(var chartId in charts) {
    if(charts[chartId].videoId === danceChart.videoId) { // TODO: Should check if danceChart.info.author is the user
      id = chartId
      break
    }
  }
  return id
}

function closeMenu () {
  document.getElementById('menu-modal').classList.toggle("show-menu-options")
  editor.status = true
}
