import app from './pixi.js'

function resize() {
  let ratio = 1280 / 720

  if (window.innerWidth / window.innerHeight >= ratio) {
      var w = window.innerHeight * ratio
      var h = window.innerHeight
  } else {
      var w = window.innerWidth
      var h = window.innerWidth / ratio
  }
  app.view.style.width = w + 'px'
  app.view.style.height = h + 'px'
}

var resizeListener = window.addEventListener('resize', resize)

export default resizeListener
