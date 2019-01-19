function playIfButtonPressed (player) {
  window.addEventListener('keydown', function () {
    player.play()
  })
}

module.exports = playIfButtonPressed
