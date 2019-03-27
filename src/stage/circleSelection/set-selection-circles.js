import * as PIXI from 'pixi.js'
import { circleSelection } from '../../config/containers.js'
import { grid } from '../../config/grid.js'
import { disableCircleClick } from './disable-circle-click.js'
var addHandInfo = require('../../moves/add-hand-info.js')

function setSelectionCircles () {
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
    circle.buttonMode = true
    circle.cacheAsBitmap = true
    circle.name = `${i}`

    circle.on('mouseover', (event) => {
      circle.alpha = 0.1
    })

    circle.on('mouseout', (event) => {
      circle.alpha = 1
    })

    circle.on('mousedown', (event) => {
      circle.alpha = 1
      //console.log(circle.name)
      addHandInfo(circle.name)
      disableCircleClick()
    })

    circleSelection.addChild(circle)
  }
}

export { setSelectionCircles }
