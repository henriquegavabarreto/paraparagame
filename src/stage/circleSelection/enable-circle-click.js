import { circleSelection } from '../../config/containers.js'
var editor = require('../../config/editor.js')

function enableCircleClick () {
  editor.areaSelect = true
  circleSelection.children.forEach(circle => {
    circle.interactive = true
  })
}

export { enableCircleClick }
