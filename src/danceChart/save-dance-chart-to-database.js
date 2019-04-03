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
      for(var chartId in charts) {
        if(charts[chartId].info.video.videoId === danceChart.info.video.videoId) { // TODO: Should check if danceChart.info.author is the user
          let overwrite = confirm('There\'s already a dance chart to this video. Do you want to overwrite it?')
          if (overwrite){
            console.log('Overwrite chart')
            danceChart.info.updatedAt = getSaveTime()
            ref.child(`${chartId}`).set(danceChart)
          } else {
            console.log('Don\'t overwrite')
          }
        } else {
          console.log('Save unique chart')
          // TODO: add info to the chart
          // danceChart.info.author = userId(?)
          danceChart.info.createdAt = getSaveTime()
          ref.push(danceChart)
        }
      }
    })
  }
}

var saveDanceChartListener = saveDanceChartButton.addEventListener('click', saveToDatabase)

module.exports = saveDanceChartListener
