import * as PIXI from 'pixi.js'
import { backgroundChart, elements, circleSelection, guideNumbers, fixedGraphics } from './containers.js'
var gameConfig = require('./game-config.js')

var pixiConfig = {
  transparent: true,
  autoResize: true,
  resolution: 2,
  antialias: true,
  clearBeforeRender: true,
  width: gameConfig.width,
  height: gameConfig.height
}

var app = new PIXI.Application(pixiConfig)

document.getElementById("canvas").appendChild(app.view)

setContainers()

export default app

function setContainers () {
  app.stage.addChild(backgroundChart)
  app.stage.addChild(elements)
  app.stage.addChild(fixedGraphics)
  app.stage.addChild(circleSelection)
  app.stage.addChild(guideNumbers)
}
