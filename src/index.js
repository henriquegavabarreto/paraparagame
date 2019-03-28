import * as PIXI from 'pixi.js'
import app from './config/pixi.js'
import { backgroundChart, elements, circleSelection, guideNumbers } from './config/containers.js'
import { setBackgroundChart } from './stage/chart/set-background-chart.js'
import { setSelectionCircles } from './stage/circleSelection/set-selection-circles.js'

app.stage.addChild(backgroundChart)
app.stage.addChild(elements)
app.stage.addChild(circleSelection)
app.stage.addChild(guideNumbers)

var showTimingOptions = require('./listeners/menus/show-timing-modal.js')
import { saveTimingOptions } from './listeners/menus/save-timing-options.js'

var showSongOptions = require('./listeners/menus/show-song-modal.js')
import { saveSongOptions } from './listeners/menus/save-song-options.js'

var showMenuOptions = require('./listeners/menus/show-menu-modal.js')
import { saveMenuOptions } from './listeners/menus/save-menu-options.js'

var playShortCut = require('./short-cuts/play.js')
var adjustPlaybackRate = require('./short-cuts/playback-rate.js')

var slowerButton = require('./listeners/player/adjust-playback-rate.js').slower
var fasterButton = require('./listeners/player/adjust-playback-rate.js').faster
var playButton = require('./listeners/player/play.js')
var onPaused = require('./listeners/player/on-pause.js')

var seekInput = require('./listeners/player/seek-input.js')

import { beatSelectors } from './short-cuts/beat-select.js'

import { noteCreator } from './short-cuts/note-creator.js'

import { deleteMove } from './moves/delete-move.js'

setBackgroundChart()

setSelectionCircles()
