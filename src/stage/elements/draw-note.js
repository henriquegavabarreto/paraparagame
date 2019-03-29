import * as PIXI from 'pixi.js'
import { elements } from '../../config/containers.js'
import { checkPosition } from '../../notes/check-position.js'

function drawNote(x, beat) {
  if ( !checkPosition(x, beat) ) {
    let note = new PIXI.Sprite.fromImage('../../../assets/move.png')
    note.x = x
    note.y = (56 * beat/4) + 58
    note.scale.x = 0.9
    if (x === 22) {
      note.name = `${beat}L`
    } else {
      note.name = `${beat}R`
    }
    elements.addChild(note)
  } else {
    console.log('there is a note here already')
  }
}

export { drawNote }
