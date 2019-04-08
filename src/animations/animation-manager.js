import app from '../config/pixi.js'
import { moveTimeline } from './move-timeline.js'
import { updateTimeText } from './update-time-text.js'
var player = require('../config/youtube.js')
import drawCues from '../stage/cueContainer/draw-cues.js'

function startAnimation () {
  app.ticker.add(()=> {
    moveTimeline()
    updateTimeText()
    if(player.getState() === 'playing') drawCues()
  })
}

export { startAnimation }
