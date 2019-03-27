import * as PIXI from 'pixi.js'
import app from './config/pixi.js'
import { backgroundChart, elements, circleSelection, guideNumbers } from './config/containers.js'
import { setBackgroundChart } from './stage/chart/set-background-chart.js'
import { setSelectionCircles } from './stage/circleSelection/set-selection-circles.js'

app.stage.addChild(backgroundChart)
app.stage.addChild(elements)
app.stage.addChild(circleSelection)
app.stage.addChild(guideNumbers)

var showTimingOptions = require('./listeners/show-timing-modal.js')
import { saveTimingOptions } from './listeners/save-timing-options.js'

var showSongOptions = require('./listeners/show-song-modal.js')
import { saveSongOptions } from './listeners/save-song-options.js'

var showMenuOptions = require('./listeners/show-menu-modal.js')
import { saveMenuOptions } from './listeners/save-menu-options.js'

var playShortCut = require('./short-cuts/play.js')
var adjustPlaybackRate = require('./short-cuts/playback-rate.js')

var slowerButton = require('./listeners/playback-rate.js').slower
var fasterButton = require('./listeners/playback-rate.js').faster
var playButton = require('./listeners/play.js')

import { beatSelectors } from './short-cuts/beat-select.js'

import { noteCreator } from './short-cuts/note-creator.js'

import { deleteMove } from './moves/delete-move.js'

var seekInput = require('./listeners/seek-input.js')

setBackgroundChart()

setSelectionCircles()

var onPaused = require('./listeners/on-pause.js')
