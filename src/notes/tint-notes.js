var editor = require('../config/editor.js')
import { elements } from '../config/containers.js'
var getMoveType = require('../moves/get-move-type.js')

function tintNotes(beatToTint, hand, moveType) {
  if (!beatToTint && !hand && !moveType) {
    hand = editor.selectedHand
    moveType = getMoveType()
    editor.beatArray.forEach((beat) => {
      let noteName = `${beat}${editor.selectedHand}`
      let note = elements.getChildByName(noteName)
      tint(moveType, note)
    })
  } else {
    let noteName = `${beatToTint}${hand}`
    let note = elements.getChildByName(noteName)
    tint(moveType, note)
  }
}

export { tintNotes }

function tint (moveType, note) {
  if (moveType === 'S') {
    note.tint = 0xff0659
  } else if (moveType === 'H') {
    note.tint = 0x00c2b5
  } else {
    note.tint = 0xffd000
  }
}
