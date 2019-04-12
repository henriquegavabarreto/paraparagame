import * as PIXI from 'pixi.js'
import { copyPasteSelection } from '../../config/containers.js'

function drawSelectionRectangle () {
  console.log('draw rectangle')
  let selection = new PIXI.Graphics()
  selection.beginFill(0x0077FF, 0.4)
  selection.lineStyle(2, 0x0077FF, 1)
  selection.drawRect(20, 56, 174, 14)
  copyPasteSelection.addChild(selection)
}

export { drawSelectionRectangle }
