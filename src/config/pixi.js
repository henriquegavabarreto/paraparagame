import * as PIXI from 'pixi.js'
import { backgroundChart, elements, circleSelection, guideNumbers, fixedGraphics, cueContainer, copyPasteSelection } from './containers.js'
var gameConfig = require('./game-config.js')

var pixiConfig = {
  transparent: false,
  backgroundColor:0x000000 ,
  autoResize: true,
  resolution: 2,
  antialias: true,
  clearBeforeRender: true,
  width: gameConfig.width,
  height: gameConfig.height
}

var app = new PIXI.Application(pixiConfig)

export default app
