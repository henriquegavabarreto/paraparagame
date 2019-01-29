import app from '../config/pixi.js'
import { moveTimeline } from './move-timeline.js'
import { updateTimeText } from './update-time-text.js'

function startAnimation () {
  app.ticker.add(()=> {
    moveTimeline()
    updateTimeText()
  })
}

export { startAnimation }
