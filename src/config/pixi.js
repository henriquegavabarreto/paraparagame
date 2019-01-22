import * as PIXI from 'pixi.js'

var pixiConfig = {
  transparent: true,
  autoResize: true,
  resolution: 2,
  antialias: true,
  clearBeforeRender: true,
  width: 1280,
  height: 780
}

var app = new PIXI.Application(pixiConfig)

document.getElementById("canvas").appendChild(app.view)

export default app
