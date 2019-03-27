import { circleSelection } from '../../config/containers.js'
var editor = require('../../config/editor.js')

function disableCircleClick () {
  editor.areaSelect = false
  circleSelection.children.forEach(circle => {
    circle.interactive = false
  })
}

export { disableCircleClick }
