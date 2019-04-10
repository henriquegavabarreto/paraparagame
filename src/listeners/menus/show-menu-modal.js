var danceChart = require('../../../data/dance-chart.js')
var editor = require('../../config/editor.js')
var player = require('../../config/youtube.js')

let menuModal = document.getElementById('menu-modal')

function showMenuModal() {
  if (!editor.areaSelect) {
    if( player.getState() !== 'paused' ) {
      player.pause()
    }

    menuModal.classList.toggle("show-menu-options")

    editor.status = false
  }
}

module.exports = showMenuModal
