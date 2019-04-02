import { elements } from '../config/containers.js'

function checkPosition (x, beat) {
  for (let notes of elements.children) {
    if (notes.x === x && notes.y === (56 * beat/4) + 58) {
      return true
      break
    }
  }
}

export { checkPosition }
