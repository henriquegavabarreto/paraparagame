import * as PIXI from 'pixi.js'
import { elements } from '../../config/containers.js'

function drawNote(x, beat) {
  let note = new PIXI.Sprite.fromImage('../../../assets/move.png')
  note.x = x
  note.y = (56 * beat/4) + 58
  note.scale.x = 0.9
  note.tint = 0xFF00FF
  if (x === 22) {
    note.name = `${beat}L`
  } else {
    note.name = `${beat}R`
  }
  elements.addChild(note)
}

export { drawNote }
