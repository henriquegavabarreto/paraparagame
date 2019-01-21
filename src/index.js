import * as PIXI from 'pixi.js'

var showTimingOptions = require('./listeners/show-timing-modal.js')
var saveTimingOptions = require('./listeners/save-timing-options.js')

var showSongOptions = require('./listeners/show-song-modal.js')
var saveSongOptions = require('./listeners/save-song-options.js')

var playShortCut = require('./short-cuts/play.js')
var adjustPlaybackRate = require('./short-cuts/playback-rate.js')

var slowerButton = require('./listeners/playback-rate.js').slower
var fasterButton = require('./listeners/playback-rate.js').faster
var playButton = require('./listeners/play.js')

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
