var beatArray = require('../config/beat-array.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')
var songManager = require('../config/song-manager.js')
import { enableCircleClick } from '../stage/circleSelection/enable-circle-click.js'
import { disableCircleClick } from '../stage/circleSelection/disable-circle-click.js'

function getHandPositions () {
  player.seek(songManager.getBeatTime(editor.beatArray[0]))
  enableCircleClick()
}

export { getHandPositions }
