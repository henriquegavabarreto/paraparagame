import * as PIXI from 'pixi.js'
import { guideNumbers } from '../../config/containers.js'
var player = require('../../config/youtube.js')
var danceChart = require('../../../data/dance-chart.js')
var songManager = require('../../config/song-manager.js')
var editor = require('../../config/editor.js')

function drawGuideNumbers () {
  guideNumbers.removeChildren()

  var videoStart = 0
  var videoEnd = player.getDuration()

  for( let i = videoStart; i <= videoEnd; i += songManager.getTempo() ) {
    let guideNumber = Math.round( ( i - danceChart.offset ) / songManager.getTempo() )

    if ( Math.abs(guideNumber % editor.adjustments.numbers) === 0) {

      var text = new PIXI.Text( guideNumber + 1, {
          fontSize: 14,
          fontFamily: 'Arial',
          fill: '#1ec503',
          align: 'center',
          stroke: '#1ec503'
      })

      text.x = 195
      text.y = 56 + (56 * guideNumber)

      text.cacheAsBitmap = true
      guideNumbers.addChild(text)
    }
  }
  player.seek(songManager.getNearestBeatTime())
}

export { drawGuideNumbers }
