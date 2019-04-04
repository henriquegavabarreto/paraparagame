import * as PIXI from 'pixi.js'
import { backgroundChart } from '../../config/containers.js'
var player = require('../../config/youtube.js')
var song = require('../../../data/dance-chart.js').info.song
var songManager = require('../../config/song-manager.js')
var editor = require('../../config/editor.js')

function redrawStaff () {
  backgroundChart.removeChildren()

  var videoStart = 0
  var videoEnd = player.getDuration()

  for( let i = videoStart; i <= videoEnd + songManager.getTempo(); i += songManager.getTempo() ) {
    let guideNumber = Math.round( ( i - song.offset ) / songManager.getTempo() )

    let staff = new PIXI.Sprite.fromImage('./../../../assets/staff.png')
    staff.x = 20
    staff.y = 56 * guideNumber
    staff.scale.x = 0.9
    backgroundChart.addChild(staff)
  }
}

export { redrawStaff }
