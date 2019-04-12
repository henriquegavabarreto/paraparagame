import * as PIXI from 'pixi.js'
import { copyPasteSelection } from '../../config/containers.js'
var songManager = require('../../config/song-manager.js')
var editor = require('../../config/editor.js')

function drawSelectionRectangle () {
  if (copyPasteSelection.children.length > 0) copyPasteSelection.removeChildren()
  let selection = new PIXI.Graphics()
  selection.beginFill(0x0077FF, 0.4)
  selection.lineStyle(2, 0x0077FF, 1)
  let x = 20
  let y = 56 * editor.copySelection[0]/4 + 56
  let h = (songManager.getNearestBeat() - editor.copySelection[0]) * 14 + 14
  if (h <= 0) {
    y = y + 14
    h = h - 28
  }
  selection.drawRect(x, y, 174, h)
  copyPasteSelection.addChild(selection)
}
export { drawSelectionRectangle }
