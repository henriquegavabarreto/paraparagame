function playIfSpacePressed (player) {
  window.addEventListener('keydown', function (event) {
    if ( event.code === 'Space' ) {
      if ( player.getState() === 'playing' ) {
        player.pause()
      } else {
        player.play()
      }
    }
  })
}

module.exports = playIfSpacePressed
