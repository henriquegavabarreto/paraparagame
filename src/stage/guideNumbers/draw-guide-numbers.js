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

  var firstNumber = Math.round( ( videoStart - danceChart.offset ) / songManager.getTempo() )
  var lastNumber = Math.round( ( videoEnd - danceChart.offset ) / songManager.getTempo() )

  for( let i = firstNumber; i <= lastNumber; i += 1 ) {

    if ( Math.abs(i % editor.adjustments.numbers) === 0) {

      var text = new PIXI.Text( i + 1, {
          fontSize: 14,
          fontFamily: 'Arial',
          fill: '#1ec503',
          align: 'center',
          stroke: '#1ec503'
      })

      text.x = 195
      text.y = 56 + (56 * i)

      text.cacheAsBitmap = true
      guideNumbers.addChild(text)
    }
  }
  player.seek(songManager.getNearestBeatTime())
}

export { drawGuideNumbers }
