import app from '../config/pixi.js'
import { moveTimeline } from './timeline.js'
import { updateTimeText } from './video-time-text.js'

function startAnimation () {
  app.ticker.add(()=> {
    moveTimeline()
    updateTimeText()
  })
}

export { startAnimation }
