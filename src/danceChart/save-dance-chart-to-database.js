var firebase = require('../config/firebase.js')
var danceChart = require('../../data/dance-chart.js')
var sortDanceChart = require('./sort-dance-chart.js')
var getSaveTime = require('./get-save-time.js')

var saveDanceChartButton = document.getElementById('save-dance-chart')

function saveToDatabase () {
  if (danceChart.info.song.title === '' || danceChart.info.song.artist === '' || danceChart.info.video.videoId === '' || danceChart.moves.length === 0) {
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
          var updates = {}
          updates['/info/song'] = danceChart.info.song
          updates['/info/video'] = danceChart.info.video
          updates['/info/updatedAt'] = getSaveTime()
          updates['/moves'] = danceChart.moves
          ref.child(`${chartId}`).update(updates)
        } else {
          console.log('Don\'t overwrite')
        }
      } else {
        console.log('Save unique chart')
        // danceChart.info.author = userId(?)
        let newChartData = danceChart
        newChartData.info.createdAt = getSaveTime()
        ref.push(newChartData)
      }
    })
  }
}

var saveDanceChartListener = saveDanceChartButton.addEventListener('click', saveToDatabase)

module.exports = saveDanceChartListener

function getChartId (charts) {
  let id = -1
  for(var chartId in charts) {
    if(charts[chartId].info.video.videoId === danceChart.info.video.videoId) { // TODO: Should check if danceChart.info.author is the user
      id = chartId
      break
    }
  }
  return id
}
