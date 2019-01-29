var editor = require('../config/editor.js')
var player = require('../config/youtube.js')
import { drawGuideNumbers } from '../stage/guideNumbers/draw-guide-numbers.js'

var saveMenuButton = document.getElementById('save-menu-changes')
var menuModal = document.getElementById('menu-modal')
var guideNumberSelect = document.getElementById('guide-number-select')

function saveChanges () {
  
  editor.adjustments.numbers = guideNumberSelect.value

  if ( player.getDuration() > 0 ) {
    drawGuideNumbers()
  }

  menuModal.classList.toggle("show-menu-options")

  editor.status = true
}

const saveMenuOptions = saveMenuButton.addEventListener('click', saveChanges)

export { saveMenuOptions }
