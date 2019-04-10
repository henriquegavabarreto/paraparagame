import { cueContainer } from '../../config/containers.js'
import * as PIXI from 'pixi.js'

function addCueGraphics() {
  var cues = new PIXI.Graphics()
  cues.name = 'cues'
  cueContainer.addChild(cues)
}

export { addCueGraphics }
