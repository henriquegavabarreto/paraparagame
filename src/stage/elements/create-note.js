import * as PIXI from 'pixi.js'
import { elements } from '../../config/containers.js'
var songManager = require('../../config/song-manager.js')

function createNote () {
  if (!checkChartPosition()) {
    let note = new PIXI.Sprite.fromImage('../assets/move.png')
    note.x = 108
    note.y = (56 * songManager.getCurrentBeat()) + 58
    note.scale.x = 0.9
    note.tint = 0xFF00FF
    note.name = songManager.getNearestBeat()
    elements.addChild(note)
  }
  console.log(elements.children)
}

function checkChartPosition () {
  for (let notes of elements.children) {
    if (notes.x === 108 && notes.y === (56 * songManager.getCurrentBeat()) + 58) {
      return true
      break
    }
  }
}

export { createNote }
