import * as PIXI from 'pixi.js'

const pixiConfig = {
  transparent: true,
  autoResize: true,
  resolution: 2,
  antialias: true,
  clearBeforeRender: true
}

const app = new PIXI.Application(pixiConfig)

document.body.appendChild(app.view)

let text = new PIXI.Text('Hello',{fill: 0xAAFF00})
app.stage.addChild(text)
