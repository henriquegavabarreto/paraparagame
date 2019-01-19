import * as PIXI from 'pixi.js'

var playIfButtonPressed = require('./test.js')

const YTPlayer = require('yt-player')
const player = new YTPlayer('#player')

player.load('lGqKYpvLkhE')

playIfButtonPressed(player)

const pixiConfig = {
  transparent: true,
  autoResize: true,
  resolution: 2,
  antialias: true,
  clearBeforeRender: true
}

const app = new PIXI.Application(pixiConfig)

document.getElementById("canvas").appendChild(app.view)

var graphics = new PIXI.Graphics()

let text = new PIXI.Text('Hello',{fill: 0xFAAFFF})
app.stage.addChild(text)
