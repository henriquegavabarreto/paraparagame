var danceChart = require('../../data/dance-chart.js')

function sortDanceChart () {
  danceChart.moves.sort(function (a, b) {
    return a.split(',')[0] - b.split(',')[0]
  })
}

module.exports = sortDanceChart
