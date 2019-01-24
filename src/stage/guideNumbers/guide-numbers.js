import * as PIXI from 'pixi.js'
import { guideNumbers } from '../../config/containers.js'
var player = require('../../config/youtube.js')
var song = require('../../../data/dance-chart.js').info.song
var songManager = require('../../config/song-manager.js')

function drawGuideNumbers () {
  guideNumbers.removeChildren()

  var videoStart = 0
  var videoEnd = player.getDuration()

  for( let i = videoStart; i <= videoEnd; i += songManager.getTempo() ) {
    let guideNumber = Math.round( ( i - song.offset ) / songManager.getTempo() )

    if ( Math.abs(guideNumber % 4) === 0) {

      var text = new PIXI.Text( guideNumber, {
          fontSize: 12,
          fontFamily: 'Arial',
          fill: '#000000',
          align: 'center',
          stroke: '#FFFFFF'
      })

      text.x = 195
      text.y = 56 + (56 * guideNumber)

      text.cacheAsBitmap = true
      guideNumbers.addChild(text)
    }

  }
}

export { drawGuideNumbers }
