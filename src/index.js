var firebase = require('./config/firebase.js')
import app from './config/pixi.js'
import resizeListener from './config/resize.js'
import { setFixedGraphics } from './stage/fixedGraphics/set-fixed-graphics.js'
import { setBackgroundChart } from './stage/chart/set-background-chart.js'
import { setSelectionCircles } from './stage/circleSelection/set-selection-circles.js'
import { addCueGraphics } from './stage/cueContainer/add-cue-graphics.js'

import { saveTimingOptions } from './listeners/menus/save-timing-options.js'
import { saveTimingOnEnter } from './listeners/menus/save-timing-options.js'

import { saveSongOptions } from './listeners/menus/save-song-options.js'
import { saveSongOnEnter } from './listeners/menus/save-song-options.js'

import { saveMenuOptions } from './listeners/menus/save-menu-options.js'
import { saveMenuOnEnter } from './listeners/menus/save-menu-options.js'

var saveDanceChartListener = require('./danceChart/save-dance-chart-to-database.js')

var playShortCut = require('./listeners/player/shortcuts/play.js')
var adjustPlaybackRate = require('./listeners/player/shortcuts/playback-rate.js')

var onPaused = require('./listeners/player/on-pause.js')

import { beatSelectors } from './listeners/shortcuts/beat-select.js'

import { noteKeyDown } from './notes/note-key-down.js'
import { noteKeyUp } from './notes/note-key-up.js'

import { deleteMove } from './moves/delete-move.js'

import { addNodeListener } from './moves/add-node.js'

setFixedGraphics()

setBackgroundChart()

setSelectionCircles()

addCueGraphics()
