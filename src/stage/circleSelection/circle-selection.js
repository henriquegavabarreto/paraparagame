import * as PIXI from 'pixi.js'
import { circleSelection } from '../../config/containers.js'
import { grid } from '../../config/grid.js'

function setCircles () {
  var circleConfig = {
    size: 80,
    lineWidth: 12,
    gridColor: 0xc0c0c0,
    gridAlpha: 0.4
  }

  for(let i = 1; i < grid.length; i++){
    let circle = new PIXI.Graphics()
    circle.lineStyle(circleConfig.lineWidth, circleConfig.gridColor, circleConfig.gridAlpha)
    circle.drawCircle(grid[i].x, grid[i].y, circleConfig.size)
    circle.interactive = true
    circle.cacheAsBitmap = true
    circle.name = i
    circle.on('mousedown', (event) => {
      console.log(circle.name)
    })
    circleSelection.addChild(circle)
  }
}

export { setCircles }
