import * as PIXI from 'pixi.js'
import { circleSelection } from '../../config/containers.js'
import { grid } from '../../config/grid.js'
import { addSelectionToArray } from '../../circles/add-selection-to-array.js'
import { addSelectionToMove } from '../../circles/add-selection-to-move.js'
var editor = require('../../config/editor.js')
var gameConfig = require('../../config/game-config.js')

function setSelectionCircles () {
  var circleConfig = {
    size: gameConfig.cue.size,
    lineWidth: gameConfig.cue.lineWidth,
    gridColor: 0xc0c0c0,
    gridAlpha: 0.4
  }

  for(let i = 1; i < grid.length; i++){
    let circle = new PIXI.Graphics()
    circle.lineStyle(circleConfig.lineWidth, circleConfig.gridColor, circleConfig.gridAlpha)
    circle.drawCircle(grid[i].x, grid[i].y, circleConfig.size)
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
      if (editor.creatingMove) {
        addSelectionToArray(circle.name)
      } else if (editor.changingMove) {
        addSelectionToMove(circle.name)
      }
    })

    circleSelection.addChild(circle)
  }
}

export { setSelectionCircles }
