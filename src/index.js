import * as PIXI from 'pixi.js'
import app from './config/pixi.js'
import { chart, elements, circleSelection, guideNumbers } from './config/containers.js'
import { setChart } from './stage/chart/chart.js'

app.stage.addChild(chart)
app.stage.addChild(elements)
app.stage.addChild(circleSelection)
app.stage.addChild(guideNumbers)

var showTimingOptions = require('./listeners/show-timing-modal.js')
import { saveTimingOptions } from './listeners/save-timing-options.js'

var showSongOptions = require('./listeners/show-song-modal.js')
import { saveSongOptions } from './listeners/save-song-options.js'

var playShortCut = require('./short-cuts/play.js')
var adjustPlaybackRate = require('./short-cuts/playback-rate.js')

var slowerButton = require('./listeners/playback-rate.js').slower
var fasterButton = require('./listeners/playback-rate.js').faster
var playButton = require('./listeners/play.js')

var beatSelect = require('./short-cuts/beat-select.js')

setChart()

var onPaused = require('./listeners/on-pause.js')

// var graphics = new PIXI.Graphics()
// let text = new PIXI.Text('Hello',{fill: 0xFAAFFF})
// chart.addChild(text)
