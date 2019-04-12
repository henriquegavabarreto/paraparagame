import * as PIXI from 'pixi.js'
import { backgroundChart } from '../../config/containers.js'
var player = require('../../config/youtube.js')
var danceChart = require('../../../data/dance-chart.js')
var songManager = require('../../config/song-manager.js')
var editor = require('../../config/editor.js')

function redrawStaff () {
  backgroundChart.removeChildren()

  var videoStart = 0
  var videoEnd = player.getDuration()

  var firstNumber = Math.round( ( videoStart - danceChart.offset ) / songManager.getTempo() )
  var lastNumber = Math.round( ( videoEnd - danceChart.offset ) / songManager.getTempo() )

  for( let i = firstNumber; i <= lastNumber; i += 1 ) {
    let staff = new PIXI.Sprite.fromImage('https://henriquegavabarreto.github.io/paraparagame/assets/staff.png')
    staff.x = 20
    staff.y = 56 * i
    staff.scale.x = 0.9
    backgroundChart.addChild(staff)
  }
}

export { redrawStaff }
