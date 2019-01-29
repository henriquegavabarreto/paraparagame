var danceChart = require('../../data/dance-chart.js')
var editor = require('../config/editor.js')
var player = require('../config/youtube.js')

let menuModal = document.getElementById('menu-modal')
let menuButton = document.getElementById('menu-button')

function toggleModal() {
  if( player.getState() !== 'paused' ) {
    player.pause()
  }

  menuModal.classList.toggle("show-menu-options")

  editor.status = false
}

module.exports = menuButton.addEventListener('click', toggleModal)
